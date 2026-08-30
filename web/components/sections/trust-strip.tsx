import { IconBadge } from '@/components/ui/icon-badge'
import { trustMetrics } from '@/data/site'

export function TrustStrip() {
  return (
    <section className="bg-accent">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 lg:grid-cols-4 lg:px-8 lg:py-12">
        {trustMetrics.map((metric) => (
          <div key={metric.label} className="flex items-center gap-4">
            <IconBadge icon={metric.icon} tone="white-on-dark" />
            <div>
              <dt className="sr-only">{metric.label}</dt>
              <dd className="font-heading text-4xl font-extrabold text-accent-foreground md:text-5xl">{metric.value}</dd>
              <dd className="mt-1 text-sm font-semibold text-accent-foreground/85">{metric.label}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  )
}
