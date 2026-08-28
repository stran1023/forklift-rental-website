'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'
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

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Điều hướng chính">
          {nav.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  active ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <a
          href={phoneHref}
          className="hidden items-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition hover:brightness-95 lg:flex"
        >
          <Phone size={16} aria-hidden="true" />
          {company.phone}
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
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="block border-b border-border py-4 text-base font-medium text-foreground">
              {item.label}
            </Link>
          ))}
          <a
            href={phoneHref}
            className="mt-4 mb-4 flex h-12 items-center justify-center gap-2 bg-accent text-sm font-bold text-accent-foreground"
          >
            <Phone size={16} aria-hidden="true" /> Gọi {company.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
