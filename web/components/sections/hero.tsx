import Link from 'next/link'
import { ArrowRight, Construction, FileText, Forklift, Hammer, MapPin, Truck, UserCog } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { company } from '@/data/site'
import { HeroSearch } from '@/components/sections/hero-search'
import { HeroSlider } from '@/components/sections/hero-slider'
import { IconBadge } from '@/components/ui/icon-badge'

const trustItems: { icon: LucideIcon; label: string; caption: string }[] = [
  { icon: Construction, label: '6 – 1.250 tấn', caption: 'Đa dạng tải trọng' },
  { icon: UserCog, label: 'Có tài xế / vận hành viên', caption: 'Đội ngũ chuyên nghiệp' },
  { icon: Hammer, label: 'Phục vụ công trình công nghiệp', caption: 'An toàn – Nhanh chóng – Hiệu quả' },
  { icon: Truck, label: 'Vận chuyển & giao thiết bị', caption: 'Đúng hẹn – Đúng địa điểm' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)]">
      <HeroSlider />

      <div className="relative z-10 mx-auto max-w-[1152px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-white uppercase backdrop-blur-sm">
              <Forklift size={11} className="text-[var(--brand-red)]" aria-hidden="true" />
              Cho thuê xe cẩu &amp; thiết bị nâng hạ
            </span>
            <h1 className="mt-5 text-balance text-5xl leading-[1.02] font-bold sm:text-6xl lg:text-7xl">
              Thiết bị nâng hạ cho công trình công nghiệp
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 font-medium text-white sm:text-xl">
              Xe cẩu từ 6 đến 1.250 tấn, xe nâng, xe nâng người và thiết bị nâng hạ — đáp ứng nhu cầu thi công, lắp đặt và vận chuyển
              cho các công trình công nghiệp.
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-white/85">
              <MapPin size={13} className="shrink-0" aria-hidden="true" />
              Phục vụ tại {company.serviceAreas.join(', ')}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/lien-he"
                className="group flex h-14 items-center gap-2 bg-accent px-7 text-base font-bold text-accent-foreground shadow-lg shadow-black/20 transition hover:brightness-95"
              >
                <FileText size={14} aria-hidden="true" />
                Nhận báo giá <ArrowRight size={14} className="cta-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroSearch />
          </div>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/15 pt-8 lg:mt-16">
          {trustItems.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              <IconBadge icon={item.icon} tone="white-on-dark" size="md" className="rounded-full" />
              <div>
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="text-xs font-medium text-white/85">{item.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
