'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { WHY_CHOOSE_US } from '@/lib/site-data'
import { SectionHeading } from '@/components/shared'
import { Counter } from '@/components/shared'

export function WhyChooseUs() {
  return (
    <section className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Why Ghost Force"
            title="Everything you need to stand out online"
            subtitle="We combine world-class design with engineering excellence to deliver digital products that perform as beautifully as they look."
            center={false}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[color:var(--purple-3)]">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
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
          <div className="relative grid grid-cols-2 gap-8">
            {[
              { value: 98, suffix: '', label: 'Avg. Lighthouse score' },
              { value: 100, suffix: '%', label: 'On-time delivery' },
              { value: 24, suffix: '/7', label: 'Support availability' },
              { value: 12, suffix: '+', label: 'Services offered' },
            ].map((stat) => (
              <div key={stat.label}>
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
