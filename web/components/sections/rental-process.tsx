import { SectionHeading } from '@/components/ui/section-heading'
import { IconBadge } from '@/components/ui/icon-badge'
import { rentalProcessSteps } from '@/data/site'

export function RentalProcess() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <SectionHeading eyebrow="Quy trình" title="Quy trình thuê thiết bị" />
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {rentalProcessSteps.map((step, i) => (
          <li key={step.title} className="relative">
            {i < rentalProcessSteps.length - 1 && (
              <span className="absolute top-7 left-full hidden w-4 border-t-2 border-dashed border-border lg:block" aria-hidden="true" />
            )}
            <div className="flex items-center gap-3">
              <IconBadge icon={step.icon} tone="navy" size="lg" />
              <span className="font-heading text-4xl font-black text-primary">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-4 font-bold text-primary">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
