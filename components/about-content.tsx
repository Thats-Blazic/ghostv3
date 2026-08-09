'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react'
import { Counter, Eyebrow } from '@/components/shared'
import { FaIcon } from '@/components/fa-icon'
import { CtaSection } from '@/components/cta-section'
import { useLanguage } from '@/components/language-provider'

const content = {
  en: {
    eyebrow: 'Independent creative studio',
    titleTop: 'Small team.',
    titleAccent: 'Serious impact.',
    intro:
      'Ghost Force Studio brings strategy, design and technology together to build brands that look distinct, move fast and perform in the real world.',
    scroll: 'Discover our approach',
    stats: ['Projects delivered', 'Client satisfaction', 'Years of experience', 'Countries served'],
    statementEyebrow: 'Our point of view',
    statement:
      'We believe the strongest digital work feels simple, even when the thinking behind it is anything but.',
    statementBody:
      'That is why we stay close to the problem, remove what does not matter and obsess over every detail that does. No unnecessary layers. No generic solutions. Just focused collaboration and work made to last.',
    valuesEyebrow: 'How we work',
    valuesTitle: 'Principles over promises.',
    values: [
      {
        icon: 'gem',
        title: 'Craft',
        description: 'Every interaction, line and pixel is considered with purpose.',
      },
      {
        icon: 'bolt',
        title: 'Momentum',
        description: 'Clear decisions and focused execution keep great ideas moving.',
      },
      {
        icon: 'handshake',
        title: 'Partnership',
        description: 'We work openly and become an extension of your internal team.',
      },
      {
        icon: 'lightbulb',
        title: 'Curiosity',
        description: 'We question the obvious to find a more distinctive answer.',
      },
    ],
    journeyEyebrow: 'Our journey',
    journeyTitle: 'Built one strong project at a time.',
    timeline: [
      ['2021', 'The beginning', 'Ghost Force Studio starts with a clear mission: make ambitious brands impossible to ignore.'],
      ['2022', 'First partnerships', 'Ten successful launches establish our reputation for speed, quality and care.'],
      ['2023', 'Going global', 'The studio expands beyond the region and begins working across three continents.'],
      ['2024', 'A wider practice', 'Brand, product and development capabilities come together under one roof.'],
      ['2025', '50+ projects', 'A growing body of work and long-term client relationships shape our next chapter.'],
    ],
    ctaTitle: 'Have an ambitious idea?',
    ctaSubtitle: 'Let us turn it into a digital experience people remember.',
  },
  sr: {
    eyebrow: 'Nezavisni kreativni studio',
    titleTop: 'Mali tim.',
    titleAccent: 'Veliki uticaj.',
    intro:
      'Ghost Force Studio spaja strategiju, dizajn i tehnologiju kako bi gradio brendove koji se izdvajaju, brzo rastu i ostvaruju stvarne rezultate.',
    scroll: 'Upoznaj naš pristup',
    stats: ['Realizovanih projekata', 'Zadovoljstvo klijenata', 'Godina iskustva', 'Zemalja'],
    statementEyebrow: 'Naš pogled',
    statement:
      'Verujemo da najbolji digitalni rad deluje jednostavno, čak i kada je razmišljanje iza njega veoma složeno.',
    statementBody:
      'Zato ostajemo blizu problema, uklanjamo sve što nije važno i posvećujemo pažnju detaljima koji prave razliku. Bez suvišnih slojeva i generičkih rešenja — samo fokusirana saradnja i rad koji traje.',
    valuesEyebrow: 'Kako radimo',
    valuesTitle: 'Principi pre obećanja.',
    values: [
      {
        icon: 'gem',
        title: 'Kvalitet',
        description: 'Svaka interakcija, linija i piksel imaju jasnu svrhu.',
      },
      {
        icon: 'bolt',
        title: 'Momentum',
        description: 'Jasne odluke i fokusirana realizacija pokreću dobre ideje.',
      },
      {
        icon: 'handshake',
        title: 'Partnerstvo',
        description: 'Radimo otvoreno i postajemo produžetak vašeg internog tima.',
      },
      {
        icon: 'lightbulb',
        title: 'Radoznalost',
        description: 'Preispitujemo očigledno kako bismo pronašli drugačiji odgovor.',
      },
    ],
    journeyEyebrow: 'Naš put',
    journeyTitle: 'Izgrađeni projekat po projekat.',
    timeline: [
      ['2021', 'Početak', 'Ghost Force Studio nastaje sa jasnom misijom: da ambiciozne brendove učini nezaboravnim.'],
      ['2022', 'Prva partnerstva', 'Deset uspešnih projekata gradi reputaciju zasnovanu na brzini, kvalitetu i posvećenosti.'],
      ['2023', 'Izlazak na globalno tržište', 'Studio širi poslovanje van regiona i sarađuje sa klijentima na tri kontinenta.'],
      ['2024', 'Širi spektar usluga', 'Brending, produkt dizajn i development spajaju se pod jednim krovom.'],
      ['2025', 'Više od 50 projekata', 'Sve veći portfolio i dugoročne saradnje oblikuju sledeće poglavlje studija.'],
    ],
    ctaTitle: 'Imaš ambicioznu ideju?',
    ctaSubtitle: 'Pretvorimo je u digitalno iskustvo koje ljudi pamte.',
  },
} as const

const stats = [
  { value: 50, suffix: '+' },
  { value: 100, suffix: '%' },
  { value: 4, suffix: '+' },
  { value: 20, suffix: '+' },
]

export function AboutContent() {
  const { language } = useLanguage()
  const copy = content[language]

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
          <div className="absolute left-[55%] top-20 h-[30rem] w-[30rem] rounded-full bg-primary/18 blur-[140px]" />
          <motion.div
            className="absolute left-[55%] top-20 h-[26rem] w-[26rem] opacity-50"
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0%, rgba(192,132,252,0.35) 15%, transparent 35%, transparent 55%, rgba(124,58,237,0.3) 75%, transparent 100%)',
              filter: 'blur(40px)',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Eyebrow>{copy.eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-6xl text-balance font-heading text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[7.5rem]"
          >
            {copy.titleTop}
            <br />
            <span className="text-gradient">{copy.titleAccent}</span>
          </motion.h1>
          <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {copy.intro}
            </p>
            <a
              href="#approach"
              className="inline-flex shrink-0 items-center gap-3 text-sm font-medium text-white"
            >
              {copy.scroll}
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                <ArrowDownRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={copy.stats[index]}
                className={`flex min-h-40 flex-col justify-center px-5 py-8 ${
                  index % 2 !== 0 ? 'border-l border-white/10' : ''
                } ${index > 1 ? 'border-t border-white/10 md:border-t-0' : ''} ${
                  index > 0 ? 'md:border-l md:border-white/10' : ''
                }`}
              >
                <p className="font-heading text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{copy.stats[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="px-5 pb-24 sm:px-8 md:pb-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
            {copy.statementEyebrow}
          </p>
          <div>
            <h2 className="text-balance font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {copy.statement}
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {copy.statementBody}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
            {copy.valuesEyebrow}
          </p>
          <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
            {copy.valuesTitle}
          </h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                data-cursor="hover"
                className="group relative min-h-64 overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--surface)]/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[color:var(--purple-3)] transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-white">
                    <FaIcon name={value.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-heading text-xs text-white/15 transition-colors duration-300 group-hover:text-[color:var(--purple-3)]/50">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="relative mt-14 font-heading text-2xl font-semibold">{value.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
              The studio model
            </p>
            <h2 className="mt-5 max-w-3xl text-balance font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Senior attention without the agency layers.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              You work directly with the people shaping the strategy, design and
              build. Fewer handoffs mean clearer communication, faster decisions
              and a better final product.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                'Direct access to the creative team',
                'A process shaped around your goals',
                'Fast, focused communication',
                'Long-term support after launch',
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 text-[color:var(--purple-3)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
            <div className="relative min-h-72 overflow-hidden border-b border-white/10 p-8">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-primary/25 blur-[90px]" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--purple-3)]">
                Built differently
              </p>
              <p className="relative mt-20 max-w-sm text-balance font-heading text-3xl font-semibold leading-tight">
                Remote by design.
                <br />
                Close by default.
              </p>
            </div>
            <div className="grid grid-cols-2">
              <Link
                href="/services"
                className="group flex min-h-28 items-end justify-between border-r border-white/10 p-5 text-sm font-medium transition-colors hover:bg-white/[0.035]"
              >
                Our services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/process"
                className="group flex min-h-28 items-end justify-between p-5 text-sm font-medium transition-colors hover:bg-white/[0.035]"
              >
                Our process
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
                {copy.journeyEyebrow}
              </p>
              <h2 className="mt-5 max-w-lg text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
                {copy.journeyTitle}
              </h2>
            </div>
            <div className="border-t border-white/10">
              {copy.timeline.map(([year, title, description]) => (
                <div
                  key={year}
                  className="grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[5rem_1fr]"
                >
                  <span className="font-heading text-sm text-[color:var(--purple-3)]">
                    {year}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection title={copy.ctaTitle} subtitle={copy.ctaSubtitle} />
    </>
  )
}
