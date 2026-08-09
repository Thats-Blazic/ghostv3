'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaIcon } from '@/components/fa-icon'
import type { Service } from '@/lib/site-data'

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      data-cursor="hover"
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--surface)]/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(135deg,transparent_40%,rgba(168,85,247,0.08)_100%)]"
      />

      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-[color:var(--purple-3)] transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-white">
          <FaIcon name={service.icon} />
        </div>
        <span className="font-heading text-xs font-medium tracking-[0.2em] text-white/15 transition-colors duration-300 group-hover:text-[color:var(--purple-3)]/50">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="relative mt-6 flex items-center gap-1.5 font-heading text-lg font-semibold tracking-tight">
        {service.title}
        <ArrowUpRight className="h-4 w-4 -translate-y-0.5 translate-x-0 text-[color:var(--purple-3)] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
      </h3>
      <p className="relative mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <div
        aria-hidden
        className="relative mt-6 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[color:var(--purple-3)]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </motion.div>
  )
}
