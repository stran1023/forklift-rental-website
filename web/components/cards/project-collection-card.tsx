'use client'

import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'

export function ProjectCollectionCard({
  title,
  icon,
  projectNames,
  expanded,
  onToggle,
  panelId,
}: {
  title: string
  icon: ReactNode
  projectNames: string[]
  expanded: boolean
  onToggle: () => void
  panelId: string
}) {
  return (
    <div className="flex flex-col border border-border bg-card">
      <div className="flex items-center gap-3 border-b border-border p-6 text-accent">
        {icon}
        <h2 className="text-sm font-bold tracking-wider text-primary uppercase">{title}</h2>
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

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="mt-6 inline-flex items-center justify-center gap-2 self-start bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition hover:brightness-95"
        >
          {expanded ? 'Ẩn hình ảnh' : `Xem hình ảnh công trình ${title.toLowerCase()}`}
          <ChevronDown size={14} aria-hidden="true" className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  )
}
