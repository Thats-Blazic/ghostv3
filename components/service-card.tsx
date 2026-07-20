'use client'

import { motion } from 'framer-motion'
import { FaIcon } from '@/components/fa-icon'
import type { Service } from '@/lib/site-data'

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      data-cursor="hover"
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--surface)]/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-[color:var(--purple-3)] transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-white">
          <FaIcon name={service.icon} />
        </div>
        <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight">
          {service.title}
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}
