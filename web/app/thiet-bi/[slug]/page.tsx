import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Gauge, Phone } from 'lucide-react'
import { Shell } from '@/components/layout/shell'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { EquipmentCard } from '@/components/cards/equipment-card'
import {
  company,
  craneModelYears,
  craneOrigins,
  equipmentItems,
  getEquipmentItem,
  phoneHref,
  type EquipmentItem,
} from '@/data/site'

export function generateStaticParams() {
  return equipmentItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = getEquipmentItem(slug)
  if (!item) return {}
  return { title: item.title, description: item.short }
}

function getRelatedEquipment(item: EquipmentItem): EquipmentItem[] {
  if (item.category === 'Xe cẩu') {
    return equipmentItems
      .filter((x) => x.category === 'Xe cẩu' && x.slug !== item.slug && x.capacityTon !== null)
      .sort((a, b) => Math.abs((a.capacityTon ?? 0) - (item.capacityTon ?? 0)) - Math.abs((b.capacityTon ?? 0) - (item.capacityTon ?? 0)))
      .slice(0, 3)
  }
  return equipmentItems.filter((x) => x.category !== 'Xe cẩu' && x.slug !== item.slug)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = getEquipmentItem(slug)
  if (!item) notFound()

  const related = getRelatedEquipment(item)

  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Trang chủ', href: '/' },
            { label: 'Xe & thiết bị', href: '/thiet-bi' },
            { label: item.category, href: '/thiet-bi' },
            { label: item.title },
          ]}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image src={item.image} alt="" aria-hidden="true" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>

        <div>
          <span className="text-xl font-bold tracking-[0.2em] text-accent uppercase">{item.category}</span>
          <h1 className="mt-2 text-3xl font-bold text-primary md:text-4xl">{item.title}</h1>

          {item.capacityTon !== null && (
            <p className="mt-3 flex items-center gap-2 text-lg font-bold text-primary">
              <Gauge size={20} className="text-accent" aria-hidden="true" />
              Sức nâng {item.capacityTon} tấn
            </p>
          )}

          <p className="mt-4 leading-7 text-muted-foreground">{item.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/lien-he?service=${encodeURIComponent(item.title)}`}
              className="flex h-12 items-center gap-2 bg-accent px-6 font-bold text-accent-foreground transition hover:brightness-95"
            >
              Nhận báo giá <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              href={phoneHref}
              className="flex h-12 items-center gap-2 border border-primary/30 px-6 font-bold text-primary transition hover:bg-secondary"
            >
              <Phone size={17} aria-hidden="true" /> Gọi {company.phone}
            </a>
          </div>

          {item.hasSpecs && (
            <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
              <div className="flex justify-between gap-4 py-4">
                <dt className="text-muted-foreground">Sức nâng</dt>
                <dd className="text-right font-bold text-foreground">{item.capacityTon} tấn</dd>
              </div>
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
          )}

          <div className="mt-8">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase">Ứng dụng</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.applications}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase">Hình thức thuê</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Hỗ trợ cho thuê{' '}
              <Link href="/dich-vu/cho-thue-ngan-han" className="font-bold text-accent hover:underline">
                ngắn hạn
              </Link>{' '}
              và{' '}
              <Link href="/dich-vu/cho-thue-dai-han" className="font-bold text-accent hover:underline">
                dài hạn
              </Link>
              , kèm{' '}
              <Link href="/dich-vu/van-chuyen-giao-thiet-bi" className="font-bold text-accent hover:underline">
                vận chuyển và giao thiết bị
              </Link>{' '}
              đến công trình.
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
            <h2 className="text-2xl font-bold text-primary">Thiết bị liên quan</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <EquipmentCard key={r.slug} item={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Shell>
  )
}
