import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { company, testimonials } from '@/data/site'

export function Testimonials() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <SectionHeading eyebrow="Đánh giá khách hàng" title="Khách hàng nói gì về chúng tôi" />

        {testimonials.length === 0 ? (
          <div className="border border-dashed border-border bg-card px-6 py-14 text-center">
            <Quote className="mx-auto text-muted-foreground" size={32} aria-hidden="true" />
            <p className="mt-4 text-lg font-bold text-primary">Chưa có đánh giá từ khách hàng</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Hãy là người đầu tiên chia sẻ trải nghiệm của bạn với {company.brandName}.
            </p>
            <Link
              href="/lien-he"
              className="mt-6 inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition hover:brightness-95"
            >
              Gửi đánh giá của bạn <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="flex flex-col border border-border bg-card p-6">
                <Quote className="text-accent" size={24} aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-base leading-7 text-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                  <span className="font-bold text-primary">{t.author}</span>
                  {t.role && <span className="block text-muted-foreground">{t.role}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
