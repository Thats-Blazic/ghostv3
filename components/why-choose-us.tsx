'use client'

import { motion } from 'framer-motion'
import {
  Gauge,
  Lock,
  Palette,
  RadioTower,
  Search,
  Settings2,
  Smartphone,
  TrendingUp,
} from 'lucide-react'
import { WHY_CHOOSE_US } from '@/lib/site-data'
import { SectionHeading } from '@/components/shared'
import { Counter } from '@/components/shared'

const ICONS = [Palette, Gauge, Smartphone, Search, Lock, TrendingUp, Settings2, RadioTower]

const HIGHLIGHT_STATS = [
  { value: 98, suffix: '', label: 'Avg. Lighthouse score' },
  { value: 100, suffix: '%', label: 'On-time delivery' },
  { value: 24, suffix: '/7', label: 'Support availability' },
  { value: 12, suffix: '+', label: 'Services offered' },
]

export function WhyChooseUs() {
  return (
    <section className="relative px-5 py-24 sm:px-8 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Why Ghost Force"
            title="Everything you need to stand out online"
            subtitle="We combine world-class design with engineering excellence to deliver digital products that perform as beautifully as they look."
            center={false}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = ICONS[i % ICONS.length]
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.07]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[color:var(--purple-3)] transition-colors duration-300 group-hover:bg-primary/25 group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-gradient relative overflow-hidden rounded-3xl p-8 sm:p-10"
        >
          <div
            aria-hidden
            className="animate-blob absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/25 blur-[80px]"
          />
          <div
            aria-hidden
            className="animate-blob absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[color:var(--purple-3)]/15 blur-[90px] [animation-delay:-9s]"
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full opacity-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0%, rgba(192,132,252,0.5) 20%, transparent 45%, transparent 65%, rgba(124,58,237,0.45) 85%, transparent 100%)',
              filter: 'blur(6px)',
            }}
          />

          <div className="relative grid grid-cols-2 gap-x-8 gap-y-9">
            {HIGHLIGHT_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i % 2 !== 0
                    ? 'border-l border-white/10 pl-6'
                    : i > 1
                      ? 'border-white/10'
                      : ''
                }
              >
                <p className="font-heading text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
