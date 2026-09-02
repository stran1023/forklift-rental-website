import Image from 'next/image'
import { company } from '@/data/site'
import { Logo } from '@/components/logo'

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  logoWatermark,
}: {
  eyebrow?: string
  title: string
  text?: string
  /** Optional full-bleed background photo, dimmed under the navy overlay. */
  image?: string
  /** Large, low-opacity brand mark in the corner — use sparingly (About page only). */
  logoWatermark?: boolean
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] px-5 py-16 text-white lg:px-8 lg:py-20">
      {image && (
        <Image src={image} alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover" />
      )}
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--brand-navy)', opacity: image ? 0.72 : 1 }} />
      {logoWatermark && (
        <Logo
          variant="dark"
          className="pointer-events-none absolute -right-6 -bottom-8 hidden h-40 w-auto opacity-[0.08] sm:block lg:h-56"
        />
      )}
      <div className="relative mx-auto max-w-7xl">
        <span className="text-xl font-bold tracking-[0.2em] text-white uppercase">
          {eyebrow ?? `${company.brandName} · Nâng hạ & thiết bị`}
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">{text}</p>}
      </div>
    </section>
  )
}
