'use client'

import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { EquipmentCard } from '@/components/cards/equipment-card'
import { capacityBuckets, equipmentCategoryFilters, type EquipmentItem } from '@/data/site'
import { cn } from '@/lib/utils'

type SortOrder = 'default' | 'capacity-asc' | 'capacity-desc'

export function EquipmentCatalog({
  items,
  initialQuery = '',
  initialCategory = null,
  initialCapacity = null,
}: {
  items: EquipmentItem[]
  initialQuery?: string
  initialCategory?: string | null
  initialCapacity?: string | null
}) {
  const [query, setQuery] = useState(initialQuery)
  const [category, setCategory] = useState<string | null>(initialCategory)
  const [capacity, setCapacity] = useState<string | null>(initialCapacity)
  const [sort, setSort] = useState<SortOrder>('default')

  const filtered = useMemo(() => {
    const bucket = capacityBuckets.find((b) => b.label === capacity)
    const q = query.trim().toLowerCase()

    let result = items.filter((item) => {
      if (q && !item.title.toLowerCase().includes(q)) return false
      if (category && item.category !== category) return false
      if (bucket) {
        if (item.capacityTon === null) return false
        if (item.capacityTon < bucket.min || item.capacityTon >= bucket.max) return false
      }
      return true
    })

    if (sort === 'capacity-asc') {
      result = [...result].sort((a, b) => (a.capacityTon ?? -1) - (b.capacityTon ?? -1))
    } else if (sort === 'capacity-desc') {
      result = [...result].sort((a, b) => (b.capacityTon ?? -1) - (a.capacityTon ?? -1))
    }

    return result
  }, [items, query, category, capacity, sort])

  const hasActiveFilters = query !== '' || category !== null || capacity !== null

  function clearFilters() {
    setQuery('')
    setCategory(null)
    setCapacity(null)
  }

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <label className="relative block">
            <span className="sr-only">Tìm thiết bị</span>
            <Search size={14} className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm thiết bị..."
              className="h-12 w-full border border-input bg-background pr-3 pl-10 text-sm"
            />
          </label>

          <fieldset className="mt-6">
            <legend className="text-xs font-bold tracking-wider text-primary uppercase">Loại thiết bị</legend>
            <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
              {equipmentCategoryFilters.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => setCategory(category === c ? null : c)}
                  className={cn(
                    'border px-3 py-2 text-left text-sm font-medium transition',
                    category === c
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-foreground hover:border-primary/40',
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-xs font-bold tracking-wider text-primary uppercase">Sức nâng</legend>
            <p className="mt-1 text-xs text-muted-foreground">Áp dụng cho Xe cẩu</p>
            <div className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-1.5">
              {capacityBuckets.map((b) => (
                <button
                  key={b.label}
                  type="button"
                  aria-pressed={capacity === b.label}
                  onClick={() => setCapacity(capacity === b.label ? null : b.label)}
                  className={cn(
                    'border px-3 py-2 text-left text-sm font-medium transition',
                    capacity === b.label
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-foreground hover:border-primary/40',
                  )}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </fieldset>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 flex items-center gap-2 text-sm font-bold text-accent hover:underline"
            >
              <X size={12} aria-hidden="true" /> Xóa bộ lọc
            </button>
          )}
        </aside>

        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <p className="text-sm font-bold text-primary" aria-live="polite">
              {filtered.length} thiết bị
            </p>
            <label className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Sắp xếp</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOrder)}
                className="h-10 border border-input bg-background px-2 text-sm"
              >
                <option value="default">Mặc định</option>
                <option value="capacity-asc">Sức nâng tăng dần</option>
                <option value="capacity-desc">Sức nâng giảm dần</option>
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="border border-dashed border-border py-16 text-center">
              <p className="font-bold text-primary">Không tìm thấy thiết bị phù hợp</p>
              <p className="mt-2 text-sm text-muted-foreground">Thử điều chỉnh từ khóa hoặc bộ lọc.</p>
              <button type="button" onClick={clearFilters} className="mt-5 inline-flex bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground">
                Xóa bộ lọc
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((item) => (
                <EquipmentCard key={item.slug} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
