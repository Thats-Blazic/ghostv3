'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/site-data'

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
        <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/15" aria-hidden />
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
                “{t.quote}”
              </blockquote>
              <div className="mt-7 flex items-center gap-4">
                <Image
                  src={t.image || '/placeholder.svg'}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div>
                  <p className="font-heading font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.channel}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          data-cursor="hover"
          onClick={() => go(index - 1)}
          className="glass flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:border-primary/40 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              data-cursor="hover"
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-[color:var(--purple-3)]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          data-cursor="hover"
          onClick={() => go(index + 1)}
          className="glass flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:border-primary/40 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
