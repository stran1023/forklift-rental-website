import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Shell } from '@/components/layout/shell'

export default function NotFound() {
  return (
    <Shell>
      <div className="mx-auto flex max-w-3xl flex-col items-start px-5 py-24 lg:px-8">
        <span className="text-xl font-bold tracking-[0.2em] text-accent uppercase">404</span>
        <h1 className="mt-4 text-3xl font-bold text-primary md:text-5xl">Không tìm thấy trang</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Trang bạn tìm không tồn tại hoặc đã được di chuyển. Vui lòng quay về trang chủ hoặc liên hệ để được hỗ trợ.
        </p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-4 font-bold text-accent-foreground">
          Về trang chủ <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </Shell>
  )
}
