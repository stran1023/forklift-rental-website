import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Shell } from '@/components/layout/shell'
import { PageBanner } from '@/components/ui/page-banner'
import { company, founder, introImage } from '@/data/site'

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description: `Thông tin về ${company.legalName} — thành lập ${company.foundedDate}, cho thuê xe cẩu và thiết bị nâng hạ tại ${company.serviceAreas.join(', ')}.`,
}

export default function Page() {
  return (
    <Shell>
      <PageBanner page="about" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={introImage} alt="" aria-hidden="true" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Thiết bị đúng nhu cầu, phương án rõ ràng</h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            {company.brandName} ({company.englishName}) cung cấp dịch vụ cho thuê xe cẩu, xe nâng, xe nâng người và thiết bị nâng hạ
            khác cho các doanh nghiệp, nhà xưởng và công trình. Công ty đã tham gia thi công các công trình trọng điểm ngành dầu khí
            và điện gió.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {company.differentiators.map((point) => (
              <div key={point} className="border border-border bg-card p-4">
                <CheckCircle2 className="text-accent" size={20} aria-hidden="true" />
                <span className="mt-2 block text-sm font-bold text-primary">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold tracking-wider text-accent uppercase">Thông điệp từ Giám đốc điều hành</span>
            <blockquote className="mt-4 border-l-4 border-accent pl-6 text-lg leading-8 text-foreground italic">
              “{founder.quote}”
            </blockquote>
            <p className="mt-6 text-base font-bold text-primary">
              {founder.name} <span className="font-normal text-muted-foreground">— {founder.title}</span>
            </p>
          </div>
          <div className="relative aspect-[3/4] w-full overflow-hidden lg:mx-auto lg:max-w-md">
            <Image
              src={founder.image}
              alt={`${founder.name} — ${founder.title}`}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </Shell>
  )
}
