import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Phone } from 'lucide-react'
import { Shell } from '@/components/layout/shell'
import { PageHero } from '@/components/ui/page-hero'
import { company, getService, phoneHref, services } from '@/data/site'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return { title: service.title, description: service.short }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <Shell>
      <PageHero title={service.title} text={service.short} />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={service.image} alt="" aria-hidden="true" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <p className="text-base leading-8 text-muted-foreground">{service.description}</p>
          <a
            href={phoneHref}
            className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-4 font-bold text-accent-foreground transition hover:brightness-95"
          >
            <Phone size={17} aria-hidden="true" /> Gọi {company.phone} để được tư vấn
          </a>
        </div>
      </div>
    </Shell>
  )
}
