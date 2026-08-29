import { Search, Weight } from 'lucide-react'
import { capacityBuckets, equipmentCategoryFilters } from '@/data/site'

export function HeroSearch() {
  return (
    <form action="/thiet-bi" method="GET" className="w-full max-w-md bg-white p-6 shadow-xl md:p-7">
      <h2 className="text-xl font-bold text-primary">Tìm thiết bị phù hợp</h2>
      <p className="mt-1 text-sm text-muted-foreground">Chọn loại thiết bị và tải trọng bạn cần.</p>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-1.5 text-sm font-semibold text-foreground">
          <span className="flex items-center gap-1.5">
            <Search size={15} className="text-accent" aria-hidden="true" />
            Loại thiết bị
          </span>
          <select name="category" defaultValue="" className="h-12 border border-input bg-background px-3 font-normal text-foreground">
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
            <Weight size={15} className="text-accent" aria-hidden="true" />
            Tải trọng (tấn)
          </span>
          <select name="capacity" defaultValue="" className="h-12 border border-input bg-background px-3 font-normal text-foreground">
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
          className="flex h-12 items-center justify-center gap-2 bg-accent text-sm font-bold text-accent-foreground transition hover:brightness-95"
        >
          Tìm kiếm ngay
        </button>
      </div>
    </form>
  )
}
