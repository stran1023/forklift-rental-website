import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Phone } from 'lucide-react'
import { Shell } from '@/components/layout/shell'
import { PageHero } from '@/components/ui/page-hero'
import { Breadcrumb } from '@/components/ui/breadcrumb'
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
      <div className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Trang chủ', href: '/' }, { label: 'Dịch vụ', href: '/dich-vu' }, { label: service.title }]} />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={service.image} alt="" aria-hidden="true" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <p className="text-base leading-8 text-muted-foreground">{service.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/lien-he?service=${encodeURIComponent(service.title)}`}
              className="flex items-center gap-2 bg-accent px-6 py-4 font-bold text-accent-foreground transition hover:brightness-95"
            >
              Nhận báo giá <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <a
              href={phoneHref}
              className="flex items-center gap-2 border border-primary/30 px-6 py-4 font-bold text-primary transition hover:bg-secondary"
            >
              <Phone size={14} aria-hidden="true" /> Gọi {company.phone}
            </a>
          </div>
        </div>
      </div>
    </Shell>
  )
}
