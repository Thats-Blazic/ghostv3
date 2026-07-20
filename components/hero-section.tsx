'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/magnetic-button'
import { Eyebrow } from '@/components/shared'
import { STATS } from '@/lib/site-data'
import { Counter } from '@/components/shared'
import { useLanguage } from '@/components/language-provider'

const easeOut = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  const { language } = useLanguage()
  const copy =
    language === 'en'
      ? {
          eyebrow: 'Digital Creative Studio',
          title: 'We create digital work',
          accent: 'people remember.',
          intro:
            'Premium websites, bold visual identities and high-impact creative content for ambitious brands.',
          primary: 'Start a Project',
          secondary: 'View Our Work',
          stats: STATS.map((stat) => stat.label),
        }
      : {
          eyebrow: 'Digitalni kreativni studio',
          title: 'Kreiramo digitalni rad',
          accent: 'koji se pamti.',
          intro:
            'Premium sajtovi, snažni vizuelni identiteti i kreativan sadržaj za ambiciozne brendove.',
          primary: 'Pokreni projekat',
          secondary: 'Pogledaj radove',
          stats: [
            'Realizovanih projekata',
            'Zadovoljstvo klijenata',
            'Godina iskustva',
            'Zemalja',
          ],
        }

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden px-6 pb-20 pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]" />
        <div className="absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[color:var(--purple-2)]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[110px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>{copy.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.05 }}
          className="mt-7 max-w-5xl text-balance font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]"
        >
          {copy.title}
          <br />
          <span className="text-gradient">{copy.accent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {copy.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="/contact">{copy.primary}</MagneticButton>
          <MagneticButton href="/projects" variant="ghost">
            {copy.secondary}
          </MagneticButton>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-md sm:grid-cols-4"
        >
          {STATS.map((s, index) => (
            <div
              key={s.label}
              className={`flex min-h-28 flex-col items-center justify-center gap-1 px-4 py-5 ${
                index % 2 !== 0 ? 'border-l border-white/10' : ''
              } ${index > 1 ? 'border-t border-white/10 sm:border-t-0' : ''} ${
                index > 0 ? 'sm:border-l sm:border-white/10' : ''
              }`}
            >
              <dt className="font-heading text-2xl font-bold text-white sm:text-3xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dt>
              <dd className="text-xs leading-snug text-muted-foreground">
                {copy.stats[index]}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
