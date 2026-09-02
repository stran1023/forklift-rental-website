import Link from 'next/link'
import { ArrowRight, Map, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { company, nav, phoneHref, zaloHref } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-[var(--brand-navy-deep)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo variant="dark" className="h-16 w-auto" />
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
          <ul className="space-y-4 text-sm leading-6 text-white/70">
            <li className="flex gap-3">
              <Phone size={14} className="mt-1 shrink-0 text-white" aria-hidden="true" />
              <a href={phoneHref} className="hover:text-white">
                <span className="block text-lg font-bold text-white">{company.phone}</span>
                <span className="text-white/60">{company.contactPerson}</span>
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle size={14} className="mt-0.5 shrink-0 text-white" aria-hidden="true" />
              <a href={zaloHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Chat Zalo
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-white" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3 text-white/50">
              <Map size={14} className="mt-0.5 shrink-0 text-white/70" aria-hidden="true" />
              <span>{company.serviceAreas.join(' · ')}</span>
            </li>
          </ul>
        </div>

        <div className="border border-white/15 bg-white/5 p-6">
          <h2 className="text-lg leading-snug font-bold text-white">Bạn cần thiết bị cho công trình?</h2>
          <p className="mt-2 text-sm text-white/70">Chúng tôi sẵn sàng hỗ trợ và tư vấn.</p>
          <Link
            href="/lien-he"
            className="group mt-5 flex h-12 items-center justify-center gap-2 bg-accent px-5 text-sm font-bold text-accent-foreground transition hover:brightness-95"
          >
            Nhận báo giá <ArrowRight size={14} className="cta-arrow" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-5 text-center text-xs text-white/50 lg:px-8">
        © {year} {company.legalName}. Bảo lưu mọi quyền.
      </div>
    </footer>
  )
}
