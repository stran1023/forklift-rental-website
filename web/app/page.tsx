import { Shell } from '@/components/layout/shell'
import { Hero } from '@/components/sections/hero'
import { EquipmentPreview } from '@/components/sections/equipment-preview'
import { TrustStrip } from '@/components/sections/trust-strip'
import { ServicesPreview } from '@/components/sections/services-preview'
import { RentalProcess } from '@/components/sections/rental-process'
import { ReferenceProjects } from '@/components/sections/reference-projects'
import { AboutPreview } from '@/components/sections/about-preview'
import { CtaBanner } from '@/components/sections/cta-banner'

export default function Page() {
  return (
    <Shell>
      <Hero />
      <EquipmentPreview />
      <TrustStrip />
      <ServicesPreview />
      <RentalProcess />
      <ReferenceProjects />
      <AboutPreview />
      <CtaBanner />
    </Shell>
  )
}
