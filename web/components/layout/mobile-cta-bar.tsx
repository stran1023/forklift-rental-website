import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { company, phoneHref } from '@/data/site'

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
      <a href={phoneHref} className="flex h-12 items-center justify-center gap-2 bg-primary text-sm font-bold text-primary-foreground">
        <Phone size={16} aria-hidden="true" /> Gọi {company.phone}
      </a>
      <Link href="/lien-he" className="flex h-12 items-center justify-center gap-2 bg-accent text-sm font-bold text-accent-foreground">
        Nhận báo giá <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  )
}
