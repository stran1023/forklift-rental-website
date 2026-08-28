import type { Metadata } from 'next'
import { Shell } from '@/components/layout/shell'
import { PageHero } from '@/components/ui/page-hero'
import { EquipmentCatalog } from '@/components/equipment/equipment-catalog'
import { company, craneCapacitiesTon, equipmentItems } from '@/data/site'

export const metadata: Metadata = {
  title: 'Xe cẩu, xe nâng & thiết bị nâng hạ',
  description: `${company.brandName} cho thuê xe cẩu từ ${craneCapacitiesTon[0]} đến ${craneCapacitiesTon.at(-1)} tấn, xe nâng, xe nâng người và thiết bị nâng hạ khác.`,
}

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams
  return (
    <Shell>
      <PageHero title="Xe & thiết bị" text="Tìm đúng thiết bị cho công trình của bạn. Liên hệ để được tư vấn thông số phù hợp." />
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <EquipmentCatalog items={equipmentItems} initialQuery={q ?? ''} />
      </div>
    </Shell>
  )
}
