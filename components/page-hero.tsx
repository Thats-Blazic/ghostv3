'use client'

import { motion } from 'framer-motion'
import { AnimatedBackground, Eyebrow } from '@/components/shared'
import { useLanguage } from '@/components/language-provider'

export function PageHero({
  eyebrow,
  title,
  subtitle,
  srEyebrow,
  srTitle,
  srSubtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  srEyebrow?: string
  srTitle?: string
  srSubtitle?: string
}) {
  const { language } = useLanguage()
  const resolvedEyebrow = language === 'sr' ? srEyebrow ?? eyebrow : eyebrow
  const resolvedTitle = language === 'sr' ? srTitle ?? title : title
  const resolvedSubtitle = language === 'sr' ? srSubtitle ?? subtitle : subtitle

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
      <AnimatedBackground />
      <div className="relative mx-auto max-w-4xl text-center">
        {resolvedEyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex justify-center"
          >
            <Eyebrow>{resolvedEyebrow}</Eyebrow>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          {resolvedTitle}
        </motion.h1>
        {resolvedSubtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {resolvedSubtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
