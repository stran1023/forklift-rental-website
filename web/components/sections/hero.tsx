import Link from 'next/link'
import { ArrowRight, Building2, Construction, FileText, Gauge, Truck, UserCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { company } from '@/data/site'
import { HeroSearch } from '@/components/sections/hero-search'
import { HeroSlider } from '@/components/sections/hero-slider'
import { IconBadge } from '@/components/ui/icon-badge'

const trustItems: { icon: LucideIcon; label: string }[] = [
  { icon: Gauge, label: '6 – 1.250 tấn' },
  { icon: UserCheck, label: 'Có tài xế / vận hành viên' },
  { icon: Construction, label: 'Phục vụ công trình công nghiệp' },
  { icon: Truck, label: 'Vận chuyển & giao thiết bị' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)]">
      <HeroSlider />

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:px-8 lg:py-24">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-white uppercase backdrop-blur-sm">
            <Building2 size={14} className="text-[var(--brand-red)]" aria-hidden="true" />
            Cho thuê xe cẩu &amp; thiết bị nâng hạ
          </span>
          <h1 className="mt-5 text-balance text-5xl leading-[1.02] font-bold sm:text-6xl lg:text-7xl">
            Thiết bị nâng hạ cho công trình công nghiệp
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
            Xe cẩu từ 6 đến 1.250 tấn, xe nâng, xe nâng người và thiết bị nâng hạ — đáp ứng nhu cầu thi công, lắp đặt và vận chuyển cho
            các công trình công nghiệp.
          </p>
          <p className="mt-3 text-sm text-white/60">Phục vụ tại {company.serviceAreas.join(', ')}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/lien-he"
              className="group flex h-14 items-center gap-2 bg-accent px-7 text-base font-bold text-accent-foreground shadow-lg shadow-black/20 transition hover:brightness-95"
            >
              <FileText size={18} aria-hidden="true" />
              Nhận báo giá <ArrowRight size={18} className="cta-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 lg:col-start-1">
          {trustItems.map((item) => (
            <li key={item.label} className="flex items-center gap-2.5 text-sm font-semibold text-white/90">
              <IconBadge icon={item.icon} tone="white-on-dark" size="sm" className="size-8" />
              {item.label}
            </li>
          ))}
        </ul>

        <div className="flex justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-end">
          <HeroSearch />
        </div>
      </div>
    </section>
  )
}
