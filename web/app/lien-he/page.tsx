import type { Metadata } from 'next'
import { Map, MapPin, Phone } from 'lucide-react'
import { Shell } from '@/components/layout/shell'
import { PageHero } from '@/components/ui/page-hero'
import { ContactForm } from '@/components/contact-form'
import { company, phoneHref } from '@/data/site'

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: `Liên hệ ${company.brandName} để được tư vấn thuê xe cẩu, xe nâng và thiết bị nâng hạ.`,
}

export default async function Page({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams
  return (
    <Shell>
      <PageHero title="Liên hệ" text="Gửi nhu cầu của bạn để được tư vấn thiết bị và phương án phù hợp." />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">Trao đổi nhu cầu của bạn</h2>
          <p className="mt-4 leading-7 text-muted-foreground">Gọi trực tiếp hoặc điền vào form bên cạnh, chúng tôi sẽ liên hệ lại sớm nhất.</p>
          <div className="mt-8 space-y-5 text-sm">
            <a href={phoneHref} className="flex items-center gap-3 font-bold text-primary hover:text-accent">
              <Phone className="text-accent" size={20} aria-hidden="true" /> {company.phone}
            </a>
            <p className="flex items-start gap-3 text-foreground">
              <MapPin className="mt-0.5 shrink-0 text-accent" size={20} aria-hidden="true" /> {company.address}
            </p>
            <p className="flex items-start gap-3 text-muted-foreground">
              <Map className="mt-0.5 shrink-0 text-accent" size={20} aria-hidden="true" /> Khu vực phục vụ:{' '}
              {company.serviceAreas.join(', ')}
            </p>
          </div>
        </div>
        <div className="border border-border bg-card p-6 md:p-8">
          <ContactForm defaultService={service} />
        </div>
      </div>
    </Shell>
  )
}
