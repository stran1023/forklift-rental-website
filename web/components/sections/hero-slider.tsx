import Image from 'next/image'
import { heroSlides } from '@/data/site'

/**
 * Auto-playing background slider for the hero section. Pure CSS crossfade
 * (see .hero-slide / @keyframes hero-slide-fade in globals.css) — no JS,
 * so it keeps running even before hydration and costs nothing at runtime.
 */
export function HeroSlider() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {heroSlides.map((src, i) => (
        <div key={src} className="hero-slide absolute inset-0" style={{ animationDelay: `${i * 8}s` }}>
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            loading={i === 0 ? undefined : 'eager'}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 35%' }}
          />
        </div>
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,55,130,0.82) 0%, rgba(0,55,130,0.70) 50%, rgba(0,55,130,0.55) 100%)',
        }}
      />
    </div>
  )
}
