import { SectionHeading } from '@/components/ui/section-heading'
import { rentalProcessSteps } from '@/data/site'

export function RentalProcess() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <SectionHeading eyebrow="Quy trình" title="Quy trình thuê thiết bị" />
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {rentalProcessSteps.map((step, i) => (
          <li key={step.title} className="border-t-2 border-accent pt-4">
            <span className="text-3xl font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 font-bold text-primary">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
