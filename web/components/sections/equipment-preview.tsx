import { EquipmentCategoryCard } from '@/components/cards/equipment-category-card'
import { SectionHeading } from '@/components/ui/section-heading'
import { craneCapacitiesTon, equipmentCategories } from '@/data/site'

export function EquipmentPreview() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Xe cẩu & thiết bị"
          title="Xe cẩu đa dạng tải trọng, sẵn sàng cho công việc"
          link={{ href: '/thiet-bi', label: 'Xem tất cả thiết bị' }}
        />

        <ul className="mb-10 flex flex-wrap gap-2" aria-label="Tải trọng xe cẩu hiện có (tấn)">
          {craneCapacitiesTon.map((ton) => (
            <li key={ton} className="border border-primary/20 bg-card px-3 py-1.5 text-sm font-bold text-primary">
              {ton} tấn
            </li>
          ))}
        </ul>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {equipmentCategories.map((category) => (
            <EquipmentCategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
