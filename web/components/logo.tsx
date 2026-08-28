import Image from 'next/image'
import { company } from '@/data/site'

export function Logo({ variant = 'light', className = 'h-11 w-auto' }: { variant?: 'light' | 'dark'; className?: string }) {
  const src = variant === 'light' ? '/logo-light.png' : '/logo-dark.png'
  return (
    <Image
      src={src}
      alt={`${company.brandName} — ${company.legalName}`}
      width={854}
      height={358}
      priority
      className={className}
      style={{ width: 'auto' }}
    />
  )
}
