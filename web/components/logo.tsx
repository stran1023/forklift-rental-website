import Image from 'next/image'
import { company } from '@/data/site'

// Intrinsic pixel size of each variant's source file — the two were cropped from
// different artwork and are not the same aspect ratio, so each needs its own
// width/height (next/image maps these to the img's sizing attributes, which the
// browser uses to compute the auto dimension below even once the image loads).
const DIMENSIONS = {
  light: { width: 1100, height: 439 },
  dark: { width: 1100, height: 455 },
} as const

export function Logo({ variant = 'light', className = 'h-11 w-auto' }: { variant?: 'light' | 'dark'; className?: string }) {
  const src = variant === 'light' ? '/logo-light.png' : '/logo-dark.png'
  return (
    <Image
      src={src}
      alt={`${company.brandName} — ${company.legalName}`}
      {...DIMENSIONS[variant]}
      priority
      className={className}
      style={{ width: 'auto' }}
    />
  )
}
