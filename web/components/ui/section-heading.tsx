import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  link,
  tone = 'light',
}: {
  eyebrow: string
  title: string
  link?: { href: string; label: string }
  /** Use "dark" when this heading sits on a navy/dark section background —
   *  the default red/navy colors are unreadable there. */
  tone?: 'light' | 'dark'
}) {
  return (
    <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <span className={cn('text-xl font-bold tracking-[0.2em] uppercase', tone === 'dark' ? 'text-white' : 'text-accent')}>
          {eyebrow}
        </span>
        <h2 className={cn('mt-2 text-3xl font-bold tracking-tight md:text-5xl', tone === 'dark' ? 'text-white' : 'text-primary')}>
          {title}
        </h2>
      </div>
      {link && (
        <Link
          href={link.href}
          className={cn(
            'group flex items-center gap-2 text-sm font-bold transition-colors',
            tone === 'dark' ? 'text-white hover:text-white/70' : 'text-primary hover:text-accent',
          )}
        >
          {link.label} <ArrowRight size={16} className="cta-arrow" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
