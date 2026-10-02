import Image from 'next/image'
import { pageBanners, type PageBannerKey } from '@/data/site'

/**
 * Shared banner for the five main section pages (Giới thiệu, Thiết bị, Dịch
 * vụ, Công trình, Liên hệ) — one component, content/image driven entirely by
 * `pageBanners` in data/site.ts. Detail pages ([slug] routes) keep using the
 * simpler PageHero instead, since they have no curated banner photo.
 */
export function PageBanner({ page }: { page: PageBannerKey }) {
  const { eyebrow, title, description, image, alt, imagePosition } = pageBanners[page]

  return (
    <section className="relative aspect-[4/3] w-full overflow-hidden bg-[#061C33] sm:aspect-[16/9] lg:aspect-[5/1]">
      <Image src={image} alt={alt} fill priority sizes="100vw" className={`object-cover ${imagePosition ?? 'object-right'}`} />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(6,28,51,0.80) 0%, rgba(11,59,96,0.60) 45%, rgba(11,59,96,0.35) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full items-center px-5 lg:px-8">
        <div className="max-w-lg lg:w-[35%] lg:max-w-none">
          <span className="flex items-center gap-2.5 text-sm font-bold tracking-[0.2em] text-white uppercase">
            <span className="h-4 w-1 shrink-0 bg-[var(--brand-red)]" aria-hidden="true" />
            {eyebrow}
          </span>
          <h1 className="mt-3 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-bold text-white">{title}</h1>
          {description && <p className="mt-3 max-w-md text-base text-white/80 sm:text-lg">{description}</p>}
        </div>
      </div>
    </section>
  )
}
