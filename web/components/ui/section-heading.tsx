import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function SectionHeading({
  eyebrow,
  title,
  link,
}: {
  eyebrow: string
  title: string
  link?: { href: string; label: string }
}) {
  return (
    <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <span className="text-xl font-bold tracking-[0.2em] text-accent uppercase">{eyebrow}</span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-5xl">{title}</h2>
      </div>
      {link && (
        <Link href={link.href} className="flex items-center gap-2 text-sm font-bold text-primary hover:text-accent">
          {link.label} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
