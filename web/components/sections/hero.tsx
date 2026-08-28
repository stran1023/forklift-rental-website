import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { company, heroImage, phoneHref } from '@/data/site'

export function Hero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[var(--brand-navy)]">
      <Image src={heroImage} alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)] via-[var(--brand-navy)]/85 to-[var(--brand-navy)]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)] via-transparent to-transparent" />
      <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-3xl text-white">
          <span className="text-xs font-bold tracking-[0.25em] text-[var(--brand-red)] uppercase">
            Cho thuê xe cẩu &amp; thiết bị nâng hạ
          </span>
          <h1 className="mt-5 text-balance text-4xl leading-[1.05] font-bold md:text-6xl">
            Thiết bị nâng hạ cho công trình dầu khí, điện gió &amp; công nghiệp
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
            Xe cẩu từ 6 đến 1.250 tấn, xe nâng, xe nâng người và thiết bị nâng hạ khác — có kèm tài xế / vận hành viên.
          </p>
          <p className="mt-3 text-sm text-white/60">Phục vụ tại {company.serviceAreas.join(', ')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={phoneHref} className="flex items-center gap-2 bg-accent px-6 py-4 font-bold text-accent-foreground transition hover:brightness-95">
              <Phone size={17} aria-hidden="true" /> Gọi ngay {company.phone}
            </a>
            <Link href="/lien-he" className="flex items-center gap-2 border border-white/40 px-6 py-4 font-bold text-white transition hover:bg-white/10">
              Nhận tư vấn <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
