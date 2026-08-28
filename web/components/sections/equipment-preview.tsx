import { EquipmentCard } from '@/components/cards/equipment-card'
import { SectionHeading } from '@/components/ui/section-heading'
import { craneCapacitiesTon, equipmentItems } from '@/data/site'

const featuredSlugs = ['xe-cau-1250-tan', 'xe-cau-50-tan', 'xe-nang', 'xe-nang-nguoi']

export function EquipmentPreview() {
  const featured = featuredSlugs.map((slug) => equipmentItems.find((i) => i.slug === slug)).filter((i) => i !== undefined)

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Thiết bị cho thuê"
          title="Tìm đúng thiết bị cho công trình của bạn"
          link={{ href: '/thiet-bi', label: 'Xem tất cả thiết bị' }}
        />

        <ul className="mb-10 flex flex-wrap gap-2" aria-label="Tải trọng xe cẩu hiện có (tấn)">
          {craneCapacitiesTon.map((ton) => (
            <li key={ton} className="border border-primary/20 bg-card px-3 py-1.5 text-sm font-bold text-primary">
              {ton} tấn
            </li>
          ))}
        </ul>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <EquipmentCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
