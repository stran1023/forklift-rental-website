import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { company, heroImage, phoneHref } from '@/data/site'
import { HeroSearch } from '@/components/sections/hero-search'

const valuePoints = ['6 – 1.250 tấn', 'Có tài xế / vận hành viên', 'Phục vụ công trình công nghiệp', 'Vận chuyển & giao thiết bị']

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)]">
      <Image
        src={heroImage}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center 35%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)] via-[var(--brand-navy)]/70 to-[var(--brand-navy)]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/70 via-transparent to-transparent" />

      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:px-8 lg:py-24">
        <div className="max-w-2xl text-white">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brand-red)] uppercase">
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
              className="flex h-14 items-center gap-2 bg-accent px-7 text-base font-bold text-accent-foreground transition hover:brightness-95"
            >
              Nhận báo giá <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={phoneHref}
              className="flex h-14 items-center gap-2 border border-white/40 px-7 text-base font-bold text-white transition hover:bg-white/10"
            >
              <Phone size={18} aria-hidden="true" /> Gọi ngay {company.phone}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:row-span-2 lg:justify-end">
          <HeroSearch />
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-white lg:col-start-1">
          {valuePoints.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-semibold text-white/85">
              <CheckCircle2 size={16} className="shrink-0 text-[var(--brand-red)]" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
