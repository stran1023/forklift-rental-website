import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { EquipmentCategory } from '@/data/site'

export function EquipmentCategoryCard({ category }: { category: EquipmentCategory }) {
  return (
    <Link
      href={`/thiet-bi/${category.slug}`}
      className="group overflow-hidden border border-border bg-card transition hover:border-primary/40 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={category.image}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary md:text-xl">{category.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.short}</p>
        <span className="mt-4 flex items-center gap-2 text-sm font-bold text-accent">
          Xem chi tiết <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
