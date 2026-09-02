'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function ProjectGallery({ photos }: { photos: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const close = useCallback(() => {
    setOpenIndex(null)
    triggerRef.current?.focus()
  }, [])

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length))
    },
    [photos.length],
  )

  useEffect(() => {
    if (openIndex === null) return
    closeBtnRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') step(-1)
      if (e.key === 'ArrowRight') step(1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, close, step])

  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            ref={(el) => {
              if (i === openIndex) triggerRef.current = el
            }}
            onClick={(e) => {
              triggerRef.current = e.currentTarget
              setOpenIndex(i)
            }}
            className="group relative aspect-[3/4] overflow-hidden bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`Xem ảnh công trình ${i + 1} trên ${photos.length}`}
          >
            <Image
              src={src}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh công trình"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={close}
            aria-label="Đóng"
            className="absolute top-4 right-4 grid size-11 place-items-center text-white/80 transition hover:text-white"
          >
            <X size={24} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Ảnh trước"
            className="absolute left-2 grid size-11 shrink-0 place-items-center text-white/80 transition hover:text-white sm:left-4"
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>

          <div
            className="relative aspect-[4/3] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[openIndex]}
              alt={`Ảnh công trình thực tế ${openIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Ảnh tiếp theo"
            className="absolute right-2 grid size-11 shrink-0 place-items-center text-white/80 transition hover:text-white sm:right-4"
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>

          <p className="absolute bottom-4 text-sm text-white/60">
            {openIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  )
}
