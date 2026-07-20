'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import {
  PORTFOLIO,
  PORTFOLIO_CATEGORIES,
  type PortfolioItem,
} from '@/lib/portfolio-data'
import { PortfolioTile } from '@/components/portfolio-tile'
import { cn } from '@/lib/utils'

const categoryMap: Record<string, PortfolioItem['type'] | 'all'> = {
  All: 'all',
  Websites: 'website',
  Banners: 'banner',
  Thumbnails: 'thumbnail',
}

export function PortfolioGallery({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof PORTFOLIO_CATEGORIES)[number]>('All')
  const [preview, setPreview] = useState<PortfolioItem | null>(null)

  const filtered = useMemo(() => {
    const type = categoryMap[active]
    const items =
      type === 'all' ? PORTFOLIO : PORTFOLIO.filter((item) => item.type === type)
    return limit ? items.slice(0, limit) : items
  }, [active, limit])

  const previewable = useMemo(
    () => filtered.filter((item) => item.type !== 'website'),
    [filtered],
  )

  const previewIndex = preview
    ? previewable.findIndex((item) => item.slug === preview.slug)
    : -1

  const goPreview = useCallback(
    (direction: 1 | -1) => {
      if (previewIndex < 0 || previewable.length === 0) return
      const next =
        (previewIndex + direction + previewable.length) % previewable.length
      setPreview(previewable[next])
    },
    [previewIndex, previewable],
  )

  useEffect(() => {
    if (!preview) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setPreview(null)
      if (event.key === 'ArrowRight') goPreview(1)
      if (event.key === 'ArrowLeft') goPreview(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [preview, goPreview])

  return (
    <>
      {!limit && (
        <div className="flex flex-wrap justify-center gap-2">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              data-cursor="hover"
              onClick={() => setActive(category)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                active === category
                  ? 'border-primary/50 bg-primary/15 text-white'
                  : 'border-white/10 text-muted-foreground hover:border-white/20 hover:text-white',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <motion.div
        layout
        className={cn(
          'columns-1 gap-3 sm:columns-2',
          limit ? 'lg:columns-3' : 'md:columns-2 lg:columns-3',
          !limit && 'mt-10',
        )}
      >
        {filtered.map((item, i) => (
          <PortfolioTile
            key={item.slug}
            item={item}
            index={i}
            compact={Boolean(limit)}
            onPreview={setPreview}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close preview"
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setPreview(null)}
            />
            <button
              type="button"
              aria-label="Close"
              data-cursor="hover"
              onClick={() => setPreview(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md"
            >
              <X className="h-5 w-5" />
            </button>
            {previewable.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous"
                  data-cursor="hover"
                  onClick={() => goPreview(-1)}
                  className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  data-cursor="hover"
                  onClick={() => goPreview(1)}
                  className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md sm:right-16"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative z-[1] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            >
              <div
                className={cn(
                  'relative w-full bg-black',
                  preview.type === 'banner' ? 'aspect-[1200/630]' : 'aspect-video',
                )}
              >
                <Image
                  src={preview.image}
                  alt={preview.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
