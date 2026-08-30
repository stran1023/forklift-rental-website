import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Shell } from '@/components/layout/shell'
import { PageHero } from '@/components/ui/page-hero'
import { aboutImage, company } from '@/data/site'

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description: `Thông tin về ${company.legalName} — thành lập ${company.foundedDate}, cho thuê xe cẩu và thiết bị nâng hạ tại ${company.serviceAreas.join(', ')}.`,
}

export default function Page() {
  return (
    <Shell>
      <PageHero title="Giới thiệu" text={`${company.legalName} — thành lập ngày ${company.foundedDate}.`} />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={aboutImage} alt="" aria-hidden="true" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Thiết bị đúng nhu cầu, phương án rõ ràng</h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            {company.brandName} ({company.englishName}) cung cấp dịch vụ cho thuê xe cẩu, xe nâng, xe nâng người và thiết bị nâng hạ
            khác cho các doanh nghiệp, nhà xưởng và công trình. Công ty đã tham gia thi công các công trình trọng điểm ngành dầu khí
            và điện gió.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {company.differentiators.map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-accent" size={16} aria-hidden="true" />
                <span className="text-sm font-bold text-primary">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">Thông tin doanh nghiệp</h2>
          <dl className="mt-8 grid gap-x-10 gap-y-6 border-t border-border pt-8 sm:grid-cols-2">
            <Row label="Tên công ty" value={company.legalName} />
            <Row label="Thương hiệu" value={company.brandName} />
            <Row label="Ngày thành lập" value={company.foundedDate} />
            <Row label="Địa chỉ trụ sở" value={company.address} />
            <Row label="Khu vực phục vụ" value={company.serviceAreas.join(', ')} />
            <Row label="Hotline" value={company.phone} />
          </dl>
        </div>
      </section>
    </Shell>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-bold tracking-wider text-muted-foreground uppercase">{label}</dt>
      <dd className="mt-1 text-base font-medium text-foreground">{value}</dd>
    </div>
  )
}
