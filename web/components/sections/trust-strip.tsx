import { trustMetrics } from '@/data/site'

export function TrustStrip() {
  return (
    <section className="bg-accent">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 lg:grid-cols-4 lg:px-8">
        {trustMetrics.map((metric) => (
          <div key={metric.label}>
            <dt className="sr-only">{metric.label}</dt>
            <dd className="text-2xl font-bold text-accent-foreground md:text-3xl">{metric.value}</dd>
            <dd className="mt-1 text-sm font-semibold text-accent-foreground/85">{metric.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
