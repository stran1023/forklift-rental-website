import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Gauge } from 'lucide-react'
import type { EquipmentItem } from '@/data/site'

export function EquipmentCard({ item }: { item: EquipmentItem }) {
  return (
    <div className="group flex flex-col overflow-hidden border border-border bg-card transition hover:border-primary/40 hover:shadow-lg">
      <Link href={`/thiet-bi/${item.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-[var(--brand-navy)] px-2.5 py-1 text-[9px] font-bold tracking-wide text-white uppercase">
          {item.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/thiet-bi/${item.slug}`} className="hover:underline">
          <h3 className="text-lg font-bold text-primary md:text-xl">{item.title}</h3>
        </Link>
        {item.capacityTon !== null && (
          <span className="mt-1.5 flex items-center gap-1.5 text-sm font-bold text-accent">
            <Gauge size={12} aria-hidden="true" />
            Sức nâng {item.capacityTon} tấn
          </span>
        )}
        <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{item.short}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <Link href={`/thiet-bi/${item.slug}`} className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent">
            Xem chi tiết <ArrowRight size={13} className="cta-arrow" aria-hidden="true" />
          </Link>
          <Link
            href={`/lien-he?service=${encodeURIComponent(item.title)}`}
            className="shrink-0 bg-accent px-3 py-2 text-xs font-bold text-accent-foreground transition hover:brightness-95"
          >
            Nhận báo giá
          </Link>
        </div>
      </div>
    </div>
  )
}
