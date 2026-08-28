import type { Metadata } from 'next'
import { Shell } from '@/components/layout/shell'
import { PageHero } from '@/components/ui/page-hero'
import { ServiceCard } from '@/components/cards/service-card'
import { company, services } from '@/data/site'

export const metadata: Metadata = {
  title: 'Dịch vụ cho thuê xe cẩu, xe nâng & thiết bị nâng hạ',
  description: `Các dịch vụ cho thuê xe cẩu, xe nâng, xe nâng người và thiết bị nâng hạ của ${company.brandName}, kèm tài xế, vận chuyển, ngắn hạn và dài hạn.`,
}

export default function Page() {
  return (
    <Shell>
      <PageHero title="Dịch vụ" text="Các dịch vụ cho thuê thiết bị nâng hạ hiện có. Liên hệ để được tư vấn phương án phù hợp." />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </Shell>
  )
}
