import { Shell } from '@/components/layout/shell'
import { Hero } from '@/components/sections/hero'
import { TrustStrip } from '@/components/sections/trust-strip'
import { ServicesPreview } from '@/components/sections/services-preview'
import { EquipmentPreview } from '@/components/sections/equipment-preview'
import { AboutPreview } from '@/components/sections/about-preview'
import { ReferenceProjects } from '@/components/sections/reference-projects'
import { CtaBanner } from '@/components/sections/cta-banner'

export default function Page() {
  return (
    <Shell>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <EquipmentPreview />
      <AboutPreview />
      <ReferenceProjects />
      <CtaBanner />
    </Shell>
  )
}
