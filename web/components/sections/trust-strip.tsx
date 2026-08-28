import { CheckCircle2 } from 'lucide-react'
import { company } from '@/data/site'

const points = [
  ...company.differentiators,
  'Xe cẩu 6 – 1.250 tấn, có kèm tài xế / vận hành viên',
]

export function TrustStrip() {
  return (
    <section className="bg-accent">
      <ul className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {points.map((text) => (
          <li key={text} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 shrink-0 text-accent-foreground" size={20} aria-hidden="true" />
            <span className="text-sm font-semibold text-accent-foreground">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
