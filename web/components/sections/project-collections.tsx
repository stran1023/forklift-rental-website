'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { ProjectCollectionCard } from '@/components/cards/project-collection-card'
import { ProjectGallery } from '@/components/sections/project-gallery'

type Collection = {
  key: string
  icon: ReactNode
  photos: string[]
  projectNames: string[]
  anchorId: string
}

export function ProjectCollections({ collections }: { collections: Collection[] }) {
  const [openId, setOpenId] = useState<string | null>(null)

  useEffect(() => {
    if (!openId) return
    document.getElementById(`gallery-${openId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [openId])

  return (
    <>
      <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {collections.map(({ key, icon, projectNames, anchorId }) => (
            <ProjectCollectionCard
              key={key}
              title={key}
              icon={icon}
              projectNames={projectNames}
              expanded={openId === anchorId}
              onToggle={() => setOpenId((current) => (current === anchorId ? null : anchorId))}
              panelId={`gallery-${anchorId}`}
            />
          ))}
        </div>
      </div>

      {collections.map(({ key, photos, anchorId }, i) => {
        if (openId !== anchorId) return null
        return (
          <section
            key={key}
            id={`gallery-${anchorId}`}
            className={`scroll-mt-20 ${i % 2 === 0 ? 'bg-secondary' : 'bg-background'}`}
          >
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
              <h2 className="text-2xl font-bold text-primary md:text-3xl">Toàn bộ hình ảnh công trình {key.toLowerCase()}</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Hình ảnh thực tế từ các công trình {key.toLowerCase()} công ty đã triển khai. Nhấn vào ảnh để xem toàn màn hình.
              </p>
              <ProjectGallery photos={photos} />
            </div>
          </section>
        )
      })}
    </>
  )
}
