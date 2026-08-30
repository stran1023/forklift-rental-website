import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ctaImage } from '@/data/site'

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] py-20">
      <Image src={ctaImage} alt="" aria-hidden="true" fill sizes="100vw" className="object-cover opacity-25" />
      <div className="relative mx-auto max-w-4xl px-5 text-center text-white lg:px-8">
        <span className="text-xl font-bold tracking-[0.2em] text-white uppercase">Sẵn sàng hỗ trợ</span>
        <h2 className="mt-4 text-3xl font-bold md:text-6xl">Bạn đang cần xe cẩu hoặc thiết bị nâng hạ?</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">Gửi yêu cầu để được tư vấn thiết bị và phương án phù hợp.</p>
        <Link
          href="/lien-he"
          className="group mt-8 inline-flex items-center gap-2 bg-accent px-6 py-4 font-bold text-accent-foreground transition hover:brightness-95"
        >
          Nhận tư vấn <ArrowRight size={17} className="cta-arrow" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
