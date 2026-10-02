import type { Metadata } from 'next'
import { Factory, Wind } from 'lucide-react'
import { Shell } from '@/components/layout/shell'
import { PageBanner } from '@/components/ui/page-banner'
import { ProjectGallery } from '@/components/sections/project-gallery'
import { ProjectCollectionCard } from '@/components/cards/project-collection-card'
import { company, oilGasProjectPhotos, referenceProjects, windPowerProjectPhotos } from '@/data/site'

export const metadata: Metadata = {
  title: 'Công trình đã tham gia',
  description: `Các công trình ngành dầu khí và điện gió mà ${company.brandName} đã tham gia thi công.`,
}

const collections = [
  { key: 'Dầu khí' as const, icon: Factory, photos: oilGasProjectPhotos, anchorId: 'dau-khi' },
  { key: 'Điện gió' as const, icon: Wind, photos: windPowerProjectPhotos, anchorId: 'dien-gio' },
]

export default function Page() {
  return (
    <Shell>
      <PageBanner page="projects" />

      <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {collections.map(({ key, icon, photos, anchorId }) => (
            <ProjectCollectionCard
              key={key}
              title={key}
              icon={icon}
              photos={photos}
              projectNames={referenceProjects.filter((p) => p.sector === key).map((p) => p.name)}
              href={`#${anchorId}`}
            />
          ))}
        </div>
      </div>

      {collections.map(({ key, photos, anchorId }, i) => (
        <section key={key} id={anchorId} className={`scroll-mt-20 ${i % 2 === 0 ? 'bg-secondary' : 'bg-background'}`}>
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">Toàn bộ hình ảnh công trình {key.toLowerCase()}</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Hình ảnh thực tế từ các công trình {key.toLowerCase()} công ty đã triển khai, chưa gắn với tên công trình cụ thể ở trên. Nhấn
              vào ảnh để xem toàn màn hình.
            </p>
            <ProjectGallery photos={photos} />
          </div>
        </section>
      ))}
    </Shell>
  )
}
