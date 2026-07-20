'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { MagneticButton } from '@/components/magnetic-button'
import { useLanguage } from '@/components/language-provider'

export function CtaSection({
  title,
  subtitle,
}: {
  title?: string
  subtitle?: string
}) {
  const { language } = useLanguage()
  const resolvedTitle =
    title ??
    (language === 'en'
      ? 'Ready to build a brand people remember?'
      : 'Spremni za brend koji se pamti?')
  const resolvedSubtitle =
    subtitle ??
    (language === 'en'
      ? 'Let us craft a digital experience that sets you apart. Tell us about your project and we will take it from there.'
      : 'Kreirajmo digitalno iskustvo koje vas izdvaja. Ispričajte nam svoju ideju, a mi ćemo je pretvoriti u rezultat.')

  return (
    <section className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="border-gradient relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="animate-blob absolute -left-10 top-0 h-56 w-56 rounded-full bg-[color:var(--purple)]/30 blur-[90px]" />
            <div className="animate-blob absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-[color:var(--purple-2)]/25 blur-[90px] [animation-delay:-8s]" />
          </div>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {resolvedTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {resolvedSubtitle}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="/contact">
                {language === 'en' ? 'Start Your Project' : 'Pokreni projekat'}
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="/projects" variant="ghost">
                {language === 'en' ? 'View Portfolio' : 'Pogledaj portfolio'}
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
