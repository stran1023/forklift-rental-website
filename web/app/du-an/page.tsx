import type { Metadata } from 'next'
import { Factory, Wind } from 'lucide-react'
import { Shell } from '@/components/layout/shell'
import { PageBanner } from '@/components/ui/page-banner'
import { ProjectCollections } from '@/components/sections/project-collections'
import { company, oilGasProjectPhotos, referenceProjects, windPowerProjectPhotos } from '@/data/site'

export const metadata: Metadata = {
  title: 'Công trình đã tham gia',
  description: `Các công trình ngành dầu khí và điện gió mà ${company.brandName} đã tham gia thi công.`,
}

const collections = [
  {
    key: 'Dầu khí' as const,
    icon: <Factory size={20} aria-hidden="true" />,
    photos: oilGasProjectPhotos,
    anchorId: 'dau-khi',
  },
  {
    key: 'Điện gió' as const,
    icon: <Wind size={20} aria-hidden="true" />,
    photos: windPowerProjectPhotos,
    anchorId: 'dien-gio',
  },
]

export default function Page() {
  return (
    <Shell>
      <PageBanner page="projects" />
      <ProjectCollections
        collections={collections.map(({ key, ...rest }) => ({
          ...rest,
          key,
          projectNames: referenceProjects.filter((p) => p.sector === key).map((p) => p.name),
        }))}
      />
    </Shell>
  )
}
