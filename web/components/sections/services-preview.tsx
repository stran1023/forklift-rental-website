import { ServiceCard } from '@/components/cards/service-card'
import { SectionHeading } from '@/components/ui/section-heading'
import { services } from '@/data/site'

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Dịch vụ của chúng tôi"
        title="Giải pháp cho từng nhu cầu nâng hạ"
        link={{ href: '/dich-vu', label: 'Xem tất cả dịch vụ' }}
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  )
}
