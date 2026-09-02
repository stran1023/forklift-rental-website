'use client'

import { useRef, useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { serviceOptions } from '@/data/site'

type Errors = Partial<Record<'name' | 'phone' | 'message', string>> & { submit?: string }

const phonePattern = /^(0|\+84)\d{9,10}$/

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const firstErrorRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim().replace(/[\s.-]/g, '')
    const message = String(data.get('message') ?? '').trim()

    const nextErrors: Errors = {}
    if (!name) nextErrors.name = 'Vui lòng nhập họ và tên.'
    if (!phone) nextErrors.phone = 'Vui lòng nhập số điện thoại.'
    else if (!phonePattern.test(phone)) nextErrors.phone = 'Số điện thoại chưa đúng định dạng.'
    if (!message) nextErrors.message = 'Vui lòng mô tả nhu cầu của bạn.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => firstErrorRef.current?.focus())
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          message,
          email: String(data.get('email') ?? '').trim(),
          companyName: String(data.get('company') ?? '').trim(),
          service: String(data.get('service') ?? '').trim(),
          duration: String(data.get('duration') ?? '').trim(),
          location: String(data.get('location') ?? '').trim(),
        }),
      })

      if (!res.ok) throw new Error('request failed')
      setSent(true)
    } catch {
      setErrors({ submit: 'Gửi yêu cầu thất bại. Vui lòng thử lại hoặc gọi trực tiếp cho chúng tôi.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    return (
      <div role="status" className="flex items-start gap-3 border border-accent bg-accent/5 p-5 text-primary">
        <CheckCircle2 className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
        <p>
          <b>Đã ghi nhận yêu cầu của bạn.</b>
          <br />
          <span className="text-sm text-muted-foreground">Chúng tôi sẽ liên hệ lại theo số điện thoại bạn đã cung cấp.</span>
        </p>
      </div>
    )
  }

  const errorList = Object.entries(errors)
  const errorFieldRef = (name: keyof Errors) =>
    errorList[0]?.[0] === name
      ? (el: HTMLInputElement | HTMLTextAreaElement | null) => {
          firstErrorRef.current = el
        }
      : undefined

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="grid gap-4">
      {errorList.length > 0 && (
        <div role="alert" className="border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
          <b>Vui lòng kiểm tra lại thông tin:</b>
          <ul className="mt-1 list-inside list-disc">
            {errorList.map(([field, msg]) => (
              <li key={field}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          ref={errorFieldRef('name')}
          label="Họ và tên"
          name="name"
          required
          error={errors.name}
        />
        <Field
          ref={errorFieldRef('phone')}
          label="Số điện thoại"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          error={errors.phone}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" autoComplete="email" />
        <Field label="Tên công ty" name="company" autoComplete="organization" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-foreground">
          Thiết bị / dịch vụ cần thuê
          <select name="service" className="h-12 border border-input bg-background px-3 font-normal" defaultValue={defaultService ?? ''}>
            <option value="">Chọn thiết bị / dịch vụ</option>
            {defaultService && !serviceOptions.includes(defaultService) && <option value={defaultService}>{defaultService}</option>}
            {serviceOptions.map((title) => (
              <option key={title}>{title}</option>
            ))}
            <option value="Khác">Khác</option>
          </select>
        </label>
        <Field label="Thời gian dự kiến" name="duration" placeholder="VD: 2 ngày, 1 tuần..." />
      </div>

      <Field label="Khu vực công trình" name="location" />

      <label className="grid gap-2 text-sm font-semibold text-foreground">
        Nội dung yêu cầu <span className="text-destructive">*</span>
        <textarea
          ref={errorFieldRef('message')}
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="Mô tả tải trọng, thời gian và yêu cầu công việc của bạn"
          className="border border-input bg-background p-3 font-normal"
        />
        {errors.message && (
          <span id="message-error" className="text-xs font-normal text-destructive">
            {errors.message}
          </span>
        )}
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="flex h-12 items-center justify-center gap-2 bg-accent font-bold text-accent-foreground transition hover:brightness-95 disabled:opacity-60"
      >
        {submitting ? 'Đang gửi…' : 'Gửi yêu cầu'}
        {!submitting && <ArrowRight size={13} aria-hidden="true" />}
      </button>
      <p className="text-xs text-muted-foreground">Thông tin của bạn chỉ được dùng để liên hệ tư vấn.</p>
    </form>
  )
}

function Field({
  label,
  name,
  required,
  type = 'text',
  autoComplete,
  placeholder,
  error,
  ref,
}: {
  label: string
  name: string
  required?: boolean
  type?: string
  autoComplete?: string
  placeholder?: string
  error?: string
  ref?: React.Ref<HTMLInputElement>
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-foreground">
      {label} {required && <span className="text-destructive">*</span>}
      <input
        ref={ref}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="h-12 border border-input bg-background px-3 font-normal"
      />
      {error && (
        <span id={`${name}-error`} className="text-xs font-normal text-destructive">
          {error}
        </span>
      )}
    </label>
  )
}
