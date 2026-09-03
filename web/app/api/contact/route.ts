import { Resend } from 'resend'
import { z } from 'zod'

const phonePattern = /^(0|\+84)\d{9,10}$/

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z
    .string()
    .trim()
    .max(30)
    .transform((v) => v.replace(/[\s.-]/g, ''))
    .refine((v) => phonePattern.test(v), 'invalid phone'),
  email: z.string().trim().max(254).email().optional().or(z.literal('')),
  companyName: z.string().trim().max(200).optional(),
  service: z.string().trim().max(200).optional(),
  duration: z.string().trim().max(200).optional(),
  location: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1).max(2000),
  // Spam signals — not part of the visible form contract, see contact-form.tsx.
  website: z.string().max(500).optional(),
  elapsedMs: z.number().optional(),
})

/** Minimum time a real visitor needs to fill the form; bots that submit instantly land under this. */
const MIN_SUBMIT_MS = 2000

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string)
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEAD_NOTIFICATION_EMAIL

  if (!apiKey || !to) {
    console.error('Contact form is not configured: missing RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL')
    return Response.json({ error: 'server_not_configured' }, { status: 500 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'invalid_body' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: 'invalid_fields', issues: parsed.error.flatten() }, { status: 400 })
  }

  const lead = parsed.data

  // Bot signals: honeypot filled, or submitted faster than a human could fill the form.
  // Respond as if it succeeded so bots don't notice and retry — just don't send anything.
  const looksLikeBot = Boolean(lead.website) || (lead.elapsedMs !== undefined && lead.elapsedMs < MIN_SUBMIT_MS)
  if (looksLikeBot) {
    return Response.json({ ok: true })
  }
  const rows: [string, string | undefined][] = [
    ['Họ và tên', lead.name],
    ['Số điện thoại', lead.phone],
    ['Email', lead.email || undefined],
    ['Công ty', lead.companyName],
    ['Thiết bị / dịch vụ', lead.service],
    ['Thời gian dự kiến', lead.duration],
    ['Khu vực công trình', lead.location],
  ]

  const html = `
    <h2>Yêu cầu tư vấn mới từ website</h2>
    <table>
      ${rows
        .filter(([, value]) => value)
        .map(([label, value]) => `<tr><td><b>${escapeHtml(label)}</b></td><td>${escapeHtml(value as string)}</td></tr>`)
        .join('')}
    </table>
    <p><b>Nội dung yêu cầu:</b></p>
    <p>${escapeHtml(lead.message).replace(/\n/g, '<br/>')}</p>
  `

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FORM_FROM_EMAIL || 'onboarding@resend.dev',
    to,
    replyTo: lead.email || undefined,
    subject: `Yêu cầu tư vấn mới — ${lead.name}`,
    html,
  })

  if (error) {
    console.error('Resend send failed:', error)
    return Response.json({ error: 'send_failed' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
