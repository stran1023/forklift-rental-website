'use client'

import Link from 'next/link'
import { track } from '@vercel/analytics'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { phoneHref, zaloHref } from '@/data/site'

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
      <a
        href={phoneHref}
        onClick={() => track('phone_click', { location: 'mobile_cta_bar' })}
        className="flex h-12 items-center justify-center gap-1.5 bg-primary text-sm font-bold text-primary-foreground"
      >
        <Phone size={13} aria-hidden="true" /> Gọi
      </a>
      <a
        href={zaloHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('zalo_click', { location: 'mobile_cta_bar' })}
        className="flex h-12 items-center justify-center gap-1.5 border-x border-border bg-background text-sm font-bold text-primary"
      >
        <MessageCircle size={13} aria-hidden="true" /> Zalo
      </a>
      <Link
        href="/lien-he"
        onClick={() => track('quote_click', { location: 'mobile_cta_bar' })}
        className="flex h-12 items-center justify-center gap-1.5 bg-accent text-sm font-bold text-accent-foreground"
      >
        Báo giá <ArrowRight size={13} aria-hidden="true" />
      </Link>
    </div>
  )
}
