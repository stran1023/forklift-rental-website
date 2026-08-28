import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Phone, Search } from 'lucide-react'
import { company, heroImage, phoneHref } from '@/data/site'

const valuePoints = ['6 – 1.250 tấn', 'Có tài xế / vận hành viên', 'Phục vụ công trình công nghiệp', 'Vận chuyển & giao thiết bị']

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)]">
      <Image src={heroImage} alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)] via-[var(--brand-navy)]/85 to-[var(--brand-navy)]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-14 lg:px-8 lg:pt-24">
        <div className="max-w-3xl text-white">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brand-red)] uppercase">
            Cho thuê xe cẩu &amp; thiết bị nâng hạ
          </span>
          <h1 className="mt-5 text-balance text-4xl leading-[1.05] font-bold md:text-6xl">Thiết bị nâng hạ cho công trình công nghiệp</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
            Xe cẩu từ 6 đến 1.250 tấn, xe nâng, xe nâng người và thiết bị nâng hạ — có kèm tài xế / vận hành viên.
          </p>
          <p className="mt-3 text-sm text-white/60">Phục vụ tại {company.serviceAreas.join(', ')}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/thiet-bi" className="flex items-center gap-2 bg-accent px-6 py-4 font-bold text-accent-foreground transition hover:brightness-95">
              Tìm thiết bị <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/lien-he" className="flex items-center gap-2 border border-white/40 px-6 py-4 font-bold text-white transition hover:bg-white/10">
              Nhận báo giá
            </Link>
            <a href={phoneHref} className="flex items-center gap-2 px-2 py-4 font-bold text-white transition hover:text-[var(--brand-red)]">
              <Phone size={17} aria-hidden="true" /> {company.phone}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {valuePoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-semibold text-white/85">
                <CheckCircle2 size={16} className="shrink-0 text-[var(--brand-red)]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <form action="/thiet-bi" method="GET" className="relative mt-10 flex max-w-xl items-center border border-white/25 bg-white/10 p-1.5 backdrop-blur-sm">
          <Search size={18} className="ml-3 shrink-0 text-white/70" aria-hidden="true" />
          <label className="flex-1">
            <span className="sr-only">Tìm thiết bị bạn cần</span>
            <input
              type="search"
              name="q"
              placeholder="Tìm thiết bị bạn cần..."
              className="h-11 w-full bg-transparent px-3 text-sm text-white placeholder:text-white/60 focus:outline-none"
            />
          </label>
          <button type="submit" className="flex h-11 items-center gap-2 bg-accent px-5 text-sm font-bold text-accent-foreground transition hover:brightness-95">
            Tìm kiếm
          </button>
        </form>
      </div>
    </section>
  )
}
