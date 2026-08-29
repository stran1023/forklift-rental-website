import { company } from '@/data/site'

export function PageHero({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <section className="bg-[var(--brand-navy)] px-5 py-16 text-white lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <span className="text-xl font-bold tracking-[0.2em] text-[var(--brand-red)] uppercase">
          {eyebrow ?? `${company.brandName} · Nâng hạ & thiết bị`}
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">{text}</p>}
      </div>
    </section>
  )
}
