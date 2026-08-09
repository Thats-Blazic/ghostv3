'use client'

import type { IconType } from 'react-icons'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiFigma,
  SiBlender,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from 'react-icons/tb'
import { SectionHeading } from '@/components/shared'
import { TECH_STACK } from '@/lib/site-data'

const ICONS: Record<string, IconType> = {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiFigma,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  SiBlender,
  SiGit,
  SiGithub,
}

function TechRow({ direction }: { direction: 'left' | 'right' }) {
  const items = [...TECH_STACK, ...TECH_STACK]
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max items-center gap-4 ${
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
        }`}
      >
        {items.map((tech, i) => {
          const Icon = ICONS[tech.icon] ?? SiReact
          return (
            <div
              key={`${tech.name}-${i}`}
              data-cursor="hover"
              className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-[color:var(--surface)]/60 px-6 py-4 transition-colors duration-300 hover:border-primary/40"
            >
              <Icon className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-[color:var(--purple-3)]" />
              <span className="whitespace-nowrap text-sm text-muted-foreground transition-colors group-hover:text-white">
                {tech.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Toolkit"
          title="Powered by industry-leading tools"
          subtitle="A modern, battle-tested stack that keeps every build fast, scalable and maintainable."
        />
      </div>
      <div className="relative mt-14 flex flex-col gap-4">
        <TechRow direction="left" />
        <TechRow direction="right" />
      </div>
    </section>
  )
}
