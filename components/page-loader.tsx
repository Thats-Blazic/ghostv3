'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10001] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div
            aria-hidden
            className="hero-speed-lines pointer-events-none absolute inset-0 opacity-30"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--purple-3)]/15 blur-3xl animate-pulse-glow"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.7, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-24 w-24 sm:h-28 sm:w-28"
          >
            <Image
              src="/ghost-logo.png"
              alt=""
              fill
              priority
              className="object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.5)]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative mt-8 font-heading text-sm font-medium uppercase tracking-[0.35em] text-white/50"
          >
            Ghost Force Studio
          </motion.p>

          <div className="relative mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-[color:var(--purple-2)] to-[color:var(--purple-3)]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.3, ease: 'easeInOut' }}
            />
          </div>
          <span className="sr-only">Loading</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
