import { Search, Truck, Weight } from 'lucide-react'
import { IconBadge } from '@/components/ui/icon-badge'
import { capacityBuckets, equipmentCategoryFilters } from '@/data/site'

export function HeroSearch() {
  return (
    <form action="/thiet-bi" method="GET" className="w-full max-w-md bg-white p-6 shadow-2xl shadow-black/30 md:p-7">
      <div className="flex items-center gap-3">
        <IconBadge icon={Search} tone="navy" size="sm" />
        <div>
          <h2 className="text-lg font-bold text-primary">Tìm thiết bị phù hợp</h2>
          <p className="text-sm text-muted-foreground">Chọn loại thiết bị và tải trọng bạn cần.</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-1.5 text-sm font-semibold text-foreground">
          <span className="flex items-center gap-1.5">
            <Truck size={12} className="text-accent" aria-hidden="true" />
            Loại thiết bị
          </span>
          <select
            name="category"
            defaultValue=""
            className="h-12 border border-input bg-background px-3 font-normal text-foreground transition-colors focus:border-primary"
          >
            <option value="">Tất cả thiết bị</option>
            {equipmentCategoryFilters.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1.5 text-sm font-semibold text-foreground">
          <span className="flex items-center gap-1.5">
            <Weight size={12} className="text-accent" aria-hidden="true" />
            Tải trọng (tấn)
          </span>
          <select
            name="capacity"
            defaultValue=""
            className="h-12 border border-input bg-background px-3 font-normal text-foreground transition-colors focus:border-primary"
          >
            <option value="">Tất cả tải trọng</option>
            {capacityBuckets.map((b) => (
              <option key={b.label} value={b.label}>
                {b.label}
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          className="group flex h-12 items-center justify-center gap-2 bg-accent text-sm font-bold text-accent-foreground transition hover:brightness-95"
        >
          Tìm kiếm ngay
          <Search size={13} className="cta-arrow" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
