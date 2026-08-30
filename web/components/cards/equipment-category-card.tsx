import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IconBadge } from '@/components/ui/icon-badge'
import { capacityBuckets, type EquipmentCategory } from '@/data/site'

export function EquipmentCategoryCard({ category }: { category: EquipmentCategory }) {
  return (
    <Link
      href={`/thiet-bi?category=${encodeURIComponent(category.title)}`}
      className="group flex flex-col overflow-hidden border border-border bg-card transition hover:border-primary/40 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={category.image}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width:768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <IconBadge
          icon={category.icon}
          tone="navy"
          className="absolute bottom-3 left-3 shadow-md transition-transform duration-200 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-primary">{category.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.short}</p>

        {category.hasSpecs && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Nhóm tải trọng">
            {capacityBuckets.map((b) => (
              <li key={b.label} className="border border-border bg-secondary px-2 py-1 text-[9px] font-bold text-primary">
                {b.label}
              </li>
            ))}
          </ul>
        )}

        <span className="mt-4 flex items-center gap-2 text-sm font-bold text-accent">
          Xem thiết bị <ArrowRight size={13} className="cta-arrow" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
