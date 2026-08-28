import { Factory, Wind } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { referenceProjects } from '@/data/site'

const sectors = [
  { key: 'Dầu khí' as const, icon: Factory },
  { key: 'Điện gió' as const, icon: Wind },
]

export function ReferenceProjects() {
  return (
    <section className="bg-[var(--brand-navy)]">
      <div className="mx-auto max-w-7xl px-5 py-16 text-white lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Công trình đã tham gia"
          title="Năng lực qua các công trình trọng điểm"
          link={{ href: '/du-an', label: 'Xem chi tiết' }}
        />
        <div className="grid gap-8 md:grid-cols-2">
          {sectors.map(({ key, icon: Icon }) => (
            <div key={key} className="border border-white/15 p-6">
              <div className="flex items-center gap-3 text-[var(--brand-red)]">
                <Icon size={22} aria-hidden="true" />
                <h3 className="text-sm font-bold tracking-wider uppercase">{key}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {referenceProjects
                  .filter((p) => p.sector === key)
                  .map((p) => (
                    <li key={p.name} className="border border-white/20 px-3 py-1.5 text-sm text-white/85">
                      {p.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
