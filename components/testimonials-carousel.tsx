'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback((next: number) => {
    setDir(next > index ? 1 : -1)
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [index])

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1)
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = TESTIMONIALS[index]

  return (
    <div className="mx-auto max-w-3xl">
      <div className="border-gradient relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div
          aria-hidden
          className="animate-blob pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-primary/20 blur-[90px]"
        />
        <div
          aria-hidden
          className="animate-blob pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[color:var(--purple-3)]/12 blur-[90px] [animation-delay:-9s]"
        />
        <Quote className="pointer-events-none absolute right-8 top-8 h-16 w-16 text-primary/15" aria-hidden />
        <div className="relative min-h-56">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[color:var(--purple-3)] text-[color:var(--purple-3)]" />
                ))}
              </div>
              <blockquote className="mt-5 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-7 flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/30">
                  <Image
                    src={t.image || '/placeholder.svg'}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.channel}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          data-cursor="hover"
          onClick={() => go(index - 1)}
          className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors hover:border-primary/40 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto px-1 sm:gap-3">
          {TESTIMONIALS.map((creator, i) => (
            <button
              key={creator.name}
              type="button"
              aria-label={`Go to ${creator.name} testimonial`}
              data-cursor="hover"
              onClick={() => go(i)}
              className={cn(
                'relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 transition-all duration-300',
                i === index
                  ? 'scale-110 ring-[color:var(--purple-3)]'
                  : 'opacity-50 ring-white/10 hover:opacity-90',
              )}
            >
              <Image src={creator.image || '/placeholder.svg'} alt={creator.name} fill className="object-cover" />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          data-cursor="hover"
          onClick={() => go(index + 1)}
          className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors hover:border-primary/40 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
