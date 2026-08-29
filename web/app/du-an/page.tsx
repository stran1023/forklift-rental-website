import type { Metadata } from 'next'
import Image from 'next/image'
import { Factory, Wind } from 'lucide-react'
import { Shell } from '@/components/layout/shell'
import { PageHero } from '@/components/ui/page-hero'
import { company, realProjectPhotos, referenceProjects } from '@/data/site'

export const metadata: Metadata = {
  title: 'Công trình đã tham gia',
  description: `Các công trình ngành dầu khí và điện gió mà ${company.brandName} đã tham gia thi công.`,
}

const sectors = [
  { key: 'Dầu khí' as const, icon: Factory },
  { key: 'Điện gió' as const, icon: Wind },
]

export default function Page() {
  return (
    <Shell>
      <PageHero
        title="Công trình"
        text="Danh sách công trình công ty đã tham gia thi công. Thông tin chi tiết từng công trình sẽ được cập nhật thêm."
      />
      <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {sectors.map(({ key, icon: Icon }) => (
            <div key={key} className="border border-border p-6">
              <div className="flex items-center gap-3 text-accent">
                <Icon size={22} aria-hidden="true" />
                <h2 className="text-sm font-bold tracking-wider text-primary uppercase">{key}</h2>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {referenceProjects
                  .filter((p) => p.sector === key)
                  .map((p) => (
                    <li key={p.name} className="border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground">
                      {p.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">Hình ảnh công trình thực tế</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Hình ảnh thực tế từ các công trình công ty đã triển khai, chưa gắn với tên công trình cụ thể ở trên.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {realProjectPhotos.map((src) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image src={src} alt="" aria-hidden="true" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  )
}
