import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Phone } from 'lucide-react'
import { Shell } from '@/components/layout/shell'
import { PageHero } from '@/components/ui/page-hero'
import { company, craneCapacitiesTon, craneModelYears, craneOrigins, equipmentCategories, getEquipmentCategory, phoneHref } from '@/data/site'

export function generateStaticParams() {
  return equipmentCategories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = getEquipmentCategory(slug)
  if (!category) return {}
  return { title: category.title, description: category.short }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getEquipmentCategory(slug)
  if (!category) notFound()

  return (
    <Shell>
      <PageHero title={category.title} text={category.short} />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={category.image} alt="" aria-hidden="true" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>

        <div>
          {category.hasSpecs ? (
            <>
              <h2 className="text-2xl font-bold text-primary">Tải trọng hiện có</h2>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tải trọng xe cẩu (tấn)">
                {craneCapacitiesTon.map((ton) => (
                  <li key={ton} className="border border-primary/20 bg-secondary px-3 py-1.5 text-sm font-bold text-primary">
                    {ton} tấn
                  </li>
                ))}
              </ul>

              <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
                <div className="flex justify-between gap-4 py-4">
                  <dt className="text-muted-foreground">Xuất xứ</dt>
                  <dd className="text-right font-bold text-foreground">{craneOrigins.join(', ')}</dd>
                </div>
                <div className="flex justify-between gap-4 py-4">
                  <dt className="text-muted-foreground">Đời xe (model)</dt>
                  <dd className="text-right font-bold text-foreground">{craneModelYears.join(', ')}</dd>
                </div>
                <div className="flex justify-between gap-4 py-4">
                  <dt className="text-muted-foreground">Tài xế / vận hành viên</dt>
                  <dd className="text-right font-bold text-foreground">Có</dd>
                </div>
              </dl>
            </>
          ) : (
            <p className="text-base leading-8 text-muted-foreground">
              {category.title} hiện có sẵn để cho thuê. Vui lòng liên hệ để được tư vấn tải trọng, số lượng và thông số phù hợp với công
              việc của bạn.
            </p>
          )}

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
