'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight, Check } from 'lucide-react'
import { FaIcon } from '@/components/fa-icon'
import { CtaSection } from '@/components/cta-section'
import { PROCESS_STEPS } from '@/lib/site-data'

export function ProcessContent() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
          <div className="absolute left-[62%] top-8 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
            How we work
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-6xl text-balance font-heading text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[7rem]"
          >
            Clear thinking.
            <br />
            <span className="text-gradient">Confident execution.</span>
          </motion.h1>
          <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A focused process removes uncertainty, protects momentum and gives
              every creative decision a reason to exist.
            </p>
            <div className="flex items-end lg:justify-end">
              <a href="#steps" className="inline-flex items-center gap-3 text-sm font-medium">
                Explore the process
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                  <ArrowDownRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 md:pb-36">
        <div className="mx-auto grid max-w-7xl border-l border-t border-white/10 md:grid-cols-3">
          {[
            ['Transparent', 'You always know what we are doing, why it matters and what comes next.'],
            ['Collaborative', 'Frequent checkpoints keep your team involved without slowing the work down.'],
            ['Outcome-led', 'Every phase connects creative decisions to a clear business objective.'],
          ].map(([title, description], index) => (
            <article key={title} className="min-h-64 border-b border-r border-white/10 p-8">
              <span className="font-heading text-xs text-[color:var(--purple-3)]">
                0{index + 1}
              </span>
              <h2 className="mt-16 font-heading text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="steps" className="border-y border-white/10 bg-white/[0.018] px-5 py-24 sm:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
                Nine focused stages
              </p>
              <h2 className="mt-5 max-w-lg text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
                From first question to lasting growth.
              </h2>
              <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">
                Each stage has a defined purpose and deliverable, so progress
                stays visible from kickoff through launch and beyond.
              </p>
            </div>

            <div className="border-t border-white/10">
              {PROCESS_STEPS.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[4rem_3rem_1fr] sm:items-start"
                >
                  <span className="font-heading text-sm text-[color:var(--purple-3)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-primary/10 text-[color:var(--purple-3)] transition-transform group-hover:-translate-y-1">
                    <FaIcon name={step.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold">{step.title}</h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <h2 className="max-w-xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
            Designed to keep everyone aligned.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Weekly progress updates', 'Clear feedback rounds', 'Shared project workspace', 'Post-launch support'].map((item) => (
              <span key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-[color:var(--purple-3)]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to move your idea forward?"
        subtitle="Tell us what you are building and we will map out the clearest path from idea to launch."
      />
    </>
  )
}
