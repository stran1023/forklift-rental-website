import type { Metadata } from 'next'
import { Shell } from '@/components/layout/shell'
import { PageBanner } from '@/components/ui/page-banner'
import { EquipmentCatalog } from '@/components/equipment/equipment-catalog'
import { capacityBuckets, company, craneCapacitiesTon, equipmentCategoryFilters, equipmentItems } from '@/data/site'

export const metadata: Metadata = {
  title: 'Xe cẩu, xe nâng & thiết bị nâng hạ',
  description: `${company.brandName} cho thuê xe cẩu từ ${craneCapacitiesTon[0]} đến ${craneCapacitiesTon.at(-1)} tấn, xe nâng, xe nâng người và thiết bị nâng hạ khác.`,
}

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string; category?: string; capacity?: string }> }) {
  const { q, category, capacity } = await searchParams
  const initialCategory = category && equipmentCategoryFilters.includes(category) ? category : null
  const initialCapacity = capacity && capacityBuckets.some((b) => b.label === capacity) ? capacity : null

  return (
    <Shell>
      <PageBanner page="equipment" />
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <EquipmentCatalog items={equipmentItems} initialQuery={q ?? ''} initialCategory={initialCategory} initialCapacity={initialCapacity} />
      </div>
    </Shell>
  )
}
