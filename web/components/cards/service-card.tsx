import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IconBadge } from '@/components/ui/icon-badge'
import type { Service } from '@/data/site'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/dich-vu/${service.slug}`}
      className="group overflow-hidden border border-border bg-card transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={service.image}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-contain p-3 transition duration-500 group-hover:scale-105"
        />
        <IconBadge
          icon={service.icon}
          tone="navy"
          className="absolute bottom-3 left-3 shadow-md transition-transform duration-200 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary md:text-xl">{service.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.short}</p>
        <span className="mt-4 flex items-center gap-2 text-sm font-bold text-accent">
          Xem chi tiết <ArrowRight size={13} className="cta-arrow" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
