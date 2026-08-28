import { EquipmentCategoryCard } from '@/components/cards/equipment-category-card'
import { SectionHeading } from '@/components/ui/section-heading'
import { equipmentCategories } from '@/data/site'

export function EquipmentPreview() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Thiết bị cho thuê"
          title="Giải pháp nâng hạ cho từng nhu cầu"
          link={{ href: '/thiet-bi', label: 'Xem tất cả thiết bị' }}
        />
        <p className="-mt-5 mb-8 max-w-2xl text-base text-muted-foreground">
          Lựa chọn thiết bị phù hợp với tải trọng và yêu cầu công trình của bạn.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {equipmentCategories.map((category) => (
            <EquipmentCategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
