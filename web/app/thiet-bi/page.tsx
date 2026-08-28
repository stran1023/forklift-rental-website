import type { Metadata } from 'next'
import { Shell } from '@/components/layout/shell'
import { PageHero } from '@/components/ui/page-hero'
import { EquipmentCategoryCard } from '@/components/cards/equipment-category-card'
import { company, craneCapacitiesTon, equipmentCategories } from '@/data/site'

export const metadata: Metadata = {
  title: 'Xe cẩu, xe nâng & thiết bị nâng hạ',
  description: `${company.brandName} cho thuê xe cẩu từ ${craneCapacitiesTon[0]} đến ${craneCapacitiesTon.at(-1)} tấn, xe nâng, xe nâng người và thiết bị nâng hạ khác.`,
}

export default function Page() {
  return (
    <Shell>
      <PageHero title="Xe & thiết bị" text="Các nhóm thiết bị nâng hạ hiện có. Liên hệ để được tư vấn thiết bị phù hợp với công việc." />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {equipmentCategories.map((category) => (
            <EquipmentCategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </Shell>
  )
}
