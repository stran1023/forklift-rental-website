import Link from 'next/link'
import { Map, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { company, nav, phoneHref } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-[var(--brand-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <Logo variant="dark" className="h-14 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
            Cho thuê xe cẩu, xe nâng và thiết bị nâng hạ cho các công trình dầu khí, điện gió và xây dựng công nghiệp.
          </p>
        </div>

        <nav aria-label="Liên kết chân trang">
          <h2 className="mb-4 text-base font-bold uppercase tracking-wider text-white">Điều hướng</h2>
          <ul className="space-y-1">
            {nav
              .filter((item) => item.href !== '/')
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1 text-sm text-white/70 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-base font-bold uppercase tracking-wider text-white">Liên hệ</h2>
          <ul className="space-y-3 text-sm leading-6 text-white/70">
            <li className="flex gap-3">
              <Phone size={14} className="mt-0.5 shrink-0 text-white" aria-hidden="true" />
              <a href={phoneHref} className="hover:text-white">
                {company.phone} ({company.contactPerson})
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-white" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3 text-white/50">
              <Map size={14} className="mt-0.5 shrink-0 text-white/70" aria-hidden="true" />
              <span>Khu vực phục vụ: {company.serviceAreas.join(', ')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-5 text-center text-xs text-white/50 lg:px-8">
        © {year} {company.legalName}. Bảo lưu mọi quyền.
      </div>
    </footer>
  )
}
