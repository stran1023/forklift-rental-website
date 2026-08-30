import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const sizeClasses = { sm: 'size-10', lg: 'size-14' } as const
const iconSizes = { sm: 18, lg: 26 } as const
const toneClasses = {
  navy: 'bg-[var(--brand-navy)] text-white',
  red: 'bg-accent text-accent-foreground',
  white: 'bg-white text-primary',
  'white-on-dark': 'bg-white/10 text-white',
} as const

/**
 * Consistent icon container used across service cards, trust metrics, the
 * rental process, and contact info — one place to keep icon sizing/color on
 * brand instead of re-styling icons per section.
 */
export function IconBadge({
  icon: Icon,
  size = 'lg',
  tone = 'navy',
  className,
}: {
  icon: LucideIcon
  size?: keyof typeof sizeClasses
  tone?: keyof typeof toneClasses
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-xl transition-transform duration-200',
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      <Icon size={iconSizes[size]} aria-hidden="true" />
    </span>
  )
}
