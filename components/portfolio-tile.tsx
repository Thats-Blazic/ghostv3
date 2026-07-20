'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, ZoomIn } from 'lucide-react'
import type { PortfolioItem } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function PortfolioTile({
  item,
  index = 0,
  onPreview,
}: {
  item: PortfolioItem
  index?: number
  onPreview?: (item: PortfolioItem) => void
  compact?: boolean
}) {
  const isWebsite = item.type === 'website'
  const [aspectRatio, setAspectRatio] = useState(16 / 9)

  const inner = (
    <>
      <Image
        src={item.image}
        alt=""
        fill
        aria-hidden
        loading="lazy"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="scale-110 object-cover opacity-35 blur-xl transition-transform duration-700 ease-out group-hover:scale-125"
        style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
      />
      <div className="absolute inset-0 bg-black/45" />
      <Image
        src={item.image}
        alt={item.title}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-[1.025] sm:p-3"
        onLoad={(event) => {
          const { naturalWidth, naturalHeight } = event.currentTarget
          if (naturalWidth && naturalHeight) {
            setAspectRatio(naturalWidth / naturalHeight)
          }
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 transition-colors duration-300 group-hover:from-black/40" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-md">
          {isWebsite ? <ExternalLink className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
        </span>
      </div>
      <span
        className={cn(
          'absolute left-3 top-3 rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur-md',
          isWebsite
            ? 'bg-primary/80 text-white'
            : 'bg-black/45 text-white/90',
        )}
      >
        {item.type}
      </span>
    </>
  )

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 8) * 0.03 }}
      style={{ aspectRatio }}
      className="group mb-3 w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--surface)]/40 shadow-[0_18px_50px_-30px_rgba(124,58,237,0.5)] transition-[border-color,box-shadow] duration-300 hover:border-primary/35 hover:shadow-[0_22px_60px_-28px_rgba(124,58,237,0.7)]"
    >
      {isWebsite && item.liveUrl ? (
        <a
          href={item.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          className="relative block h-full w-full overflow-hidden"
        >
          {inner}
        </a>
      ) : (
        <button
          type="button"
          data-cursor="hover"
          onClick={() => onPreview?.(item)}
          className="relative block h-full w-full overflow-hidden"
        >
          {inner}
        </button>
      )}
    </motion.div>
  )
}
