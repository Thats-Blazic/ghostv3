'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'
import { TESTIMONIALS } from '@/lib/site-data'

export function TestimonialsContent() {
  const featured = TESTIMONIALS[0]

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
          <div className="absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
            Client stories
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-6xl text-balance font-heading text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[7rem]"
          >
            Strong work creates
            <br />
            <span className="text-gradient">strong relationships.</span>
          </motion.h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            The best measure of our work is what happens after launch: better
            results, stronger brands and clients who choose to work with us again.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 md:pb-36">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto grid max-w-7xl overflow-hidden border border-white/10 bg-white/[0.025] lg:grid-cols-[0.72fr_1.28fr]"
        >
          <div className="relative min-h-80 overflow-hidden bg-primary/10">
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              className="object-cover opacity-80 grayscale transition duration-700 hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-heading text-xl font-semibold">{featured.name}</p>
              <p className="mt-1 text-sm text-white/60">{featured.company}</p>
            </div>
          </div>
          <div className="relative flex min-h-[30rem] flex-col justify-between p-8 sm:p-12 lg:p-16">
            <Quote className="absolute right-10 top-10 h-24 w-24 text-primary/10" />
            <div className="flex gap-1">
              {Array.from({ length: featured.rating }).map((_, index) => (
                <Star
                  key={index}
                  className="h-4 w-4 fill-[color:var(--purple-3)] text-[color:var(--purple-3)]"
                />
              ))}
            </div>
            <blockquote className="relative my-12 text-balance font-heading text-3xl font-medium leading-tight sm:text-4xl">
              “{featured.quote}”
            </blockquote>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--purple-3)]">
              Featured partnership
            </p>
          </div>
        </motion.article>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-24 sm:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
                More kind words
              </p>
              <h2 className="mt-5 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
                Trusted across industries and borders.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:justify-self-end">
              Every testimonial reflects an open partnership, a shared standard
              for quality and a commitment to meaningful outcomes.
            </p>
          </div>

          <div className="mt-14 grid border-l border-t border-white/10 md:grid-cols-2 xl:grid-cols-3">
            {TESTIMONIALS.slice(1).map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.07 }}
                className="flex min-h-96 flex-col border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.035] sm:p-8"
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Star
                      key={star}
                      className="h-3.5 w-3.5 fill-[color:var(--purple-3)] text-[color:var(--purple-3)]"
                    />
                  ))}
                </div>
                <blockquote className="mt-10 flex-1 text-pretty text-lg leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover grayscale"
                  />
                  <div>
                    <p className="font-heading font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Let us create your next success story."
        subtitle="Bring us the ambition. We will bring the strategy, craft and execution."
      />
    </>
  )
}
