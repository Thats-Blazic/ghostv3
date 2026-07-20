'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import {
  PORTFOLIO,
  WEBSITE_PROJECTS,
  type PortfolioType,
} from '@/lib/portfolio-data'

const countByType = (type: PortfolioType) =>
  PORTFOLIO.filter((item) => item.type === type).length

export function ProjectsContent() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
          <div className="absolute left-[58%] top-10 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
            Selected work
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-6xl text-balance font-heading text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[7rem]"
          >
            Made to perform.
            <br />
            <span className="text-gradient">Designed to be remembered.</span>
          </motion.h1>
          <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A selection of websites, campaigns and visual content created for
              brands that wanted to look sharper and move further.
            </p>
            <div className="flex items-end lg:justify-end">
              <a href="#archive" className="inline-flex items-center gap-3 text-sm font-medium">
                Explore all work
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                  <ArrowDownRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 md:pb-36">
        <div className="mx-auto grid max-w-7xl grid-cols-2 border-y border-white/10 md:grid-cols-4">
          {[
            [String(PORTFOLIO.length), 'Total projects'],
            [String(countByType('website')), 'Live websites'],
            [String(countByType('banner')), 'Brand campaigns'],
            [String(countByType('thumbnail')), 'Visual stories'],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`flex min-h-36 flex-col justify-center px-5 py-7 ${
                index % 2 ? 'border-l border-white/10' : ''
              } ${index > 1 ? 'border-t border-white/10 md:border-t-0' : ''} ${
                index > 0 ? 'md:border-l md:border-white/10' : ''
              }`}
            >
              <span className="font-heading text-4xl font-bold text-white sm:text-5xl">
                {value}
              </span>
              <span className="mt-2 text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
                Featured digital launches
              </p>
              <h2 className="mt-5 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
                Real websites. Live in the world.
              </h2>
            </div>
            <p className="max-w-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              Designed and developed around each brand’s audience, positioning
              and commercial goals.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {WEBSITE_PROJECTS.map((project, index) => (
              <motion.a
                key={project.slug}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--purple-3)]">
                      Website
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="archive"
        className="border-y border-white/10 bg-white/[0.018] px-5 py-24 sm:px-8 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
                Project archive
              </p>
              <h2 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
                Explore the work.
              </h2>
            </div>
            <p className="max-w-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              Filter by discipline, open live websites or click any visual to
              view it at full size.
            </p>
          </div>
          <PortfolioGallery />
        </div>
      </section>

      <CtaSection
        title="Your project could be next."
        subtitle="Tell us what you want to create and we will help shape the strongest way forward."
      />
    </>
  )
}
