'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, PhoneCall, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { nav, phoneHref, company } from '@/data/site'
import { cn } from '@/lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${company.brandName} — Trang chủ`}>
          <Logo variant="light" className="h-12 w-auto sm:h-14" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Điều hướng chính">
          {nav.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'group relative py-1 text-lg font-bold transition-colors hover:text-primary',
                  active ? 'text-primary' : 'text-foreground/70',
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute inset-x-0 -bottom-1 h-0.5 origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100',
                    active && 'scale-x-100',
                  )}
                  aria-hidden="true"
                />
              </Link>
            )
          })}
        </nav>

        <a
          href={phoneHref}
          title={company.phone}
          aria-label={`Liên hệ ngay — gọi ${company.phone}`}
          className="hidden items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold tracking-wide text-accent-foreground shadow-md transition duration-200 ease-out hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm lg:flex"
        >
          <PhoneCall size={18} aria-hidden="true" />
          LIÊN HỆ NGAY
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center text-primary lg:hidden"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Điều hướng di động" className="border-t border-border bg-background px-5 py-2 lg:hidden">
          {nav.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-3 border-b border-border py-4 text-xl font-bold transition-colors',
                  active ? 'text-primary' : 'text-foreground',
                )}
              >
                <span className={cn('h-2 w-2 shrink-0 rounded-full bg-accent transition-opacity', active ? 'opacity-100' : 'opacity-0')} aria-hidden="true" />
                {item.label}
              </Link>
            )
          })}
          <a
            href={phoneHref}
            aria-label={`Liên hệ ngay — gọi ${company.phone}`}
            className="mt-4 mb-4 flex h-14 items-center justify-center gap-2 rounded-full bg-accent text-sm font-bold tracking-wide text-accent-foreground shadow-md transition duration-200 ease-out active:scale-95 active:shadow-sm"
          >
            <PhoneCall size={18} aria-hidden="true" /> LIÊN HỆ NGAY · {company.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
