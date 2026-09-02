import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { aboutImage, company } from '@/data/site'

export function AboutPreview() {
  return (
    <section className="bg-[var(--brand-navy)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={aboutImage} alt="" aria-hidden="true" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="text-white">
          <span className="text-xl font-bold tracking-[0.2em] text-[var(--brand-red)] uppercase">Về chúng tôi</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">{company.brandName}</h2>
          <p className="mt-5 text-base leading-8 text-white/80">
            Thành lập ngày {company.foundedDate}, {company.legalName} cung cấp dịch vụ cho thuê xe cẩu, xe nâng và thiết bị nâng hạ, đã
            tham gia thi công các công trình trọng điểm ngành dầu khí và điện gió.
          </p>
          <Link href="/gioi-thieu" className="mt-7 inline-flex items-center gap-2 font-bold text-white hover:text-white/80">
            Tìm hiểu về công ty <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
