import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

const PREVIEW_COUNT = 6

export function ProjectCollectionCard({
  title,
  icon: Icon,
  photos,
  projectNames,
  href,
}: {
  title: string
  icon: LucideIcon
  photos: string[]
  projectNames: string[]
  href: string
}) {
  const preview = photos.slice(0, PREVIEW_COUNT)

  return (
    <div className="flex flex-col border border-border bg-card">
      <div className="flex items-center gap-3 border-b border-border p-6 text-accent">
        <Icon size={20} aria-hidden="true" />
        <h2 className="text-sm font-bold tracking-wider text-primary uppercase">{title}</h2>
      </div>

      <div className="grid grid-cols-3 gap-0.5 bg-border p-0.5">
        {preview.map((src, i) => (
          <div key={src} className="group relative aspect-square overflow-hidden bg-muted">
            <Image
              src={src}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width:768px) 33vw, 16vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-2 opacity-0 transition group-hover:opacity-100">
              <span className="text-[11px] font-medium text-white">
                {title} · Ảnh {i + 1}/{photos.length}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Công trình tiêu biểu</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {projectNames.map((name) => (
            <li key={name} className="border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-foreground">
              {name}
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-6 inline-flex items-center justify-center gap-2 self-start bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition hover:brightness-95"
        >
          Xem toàn bộ công trình {title.toLowerCase()} <ArrowRight size={14} className="cta-arrow" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
