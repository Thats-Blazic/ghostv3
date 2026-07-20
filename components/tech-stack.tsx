'use client'

import { motion } from 'framer-motion'
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

export function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
      {TECH_STACK.map((tech, i) => {
        const Icon = ICONS[tech.icon] ?? SiReact
        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 7) * 0.05 }}
            whileHover={{ y: -6 }}
            data-cursor="hover"
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[color:var(--surface)]/60 p-5 transition-colors duration-300 hover:border-primary/40"
          >
            <Icon className="h-8 w-8 text-muted-foreground transition-colors duration-300 group-hover:text-[color:var(--purple-3)]" />
            <span className="text-center text-xs text-muted-foreground transition-colors group-hover:text-white">
              {tech.name}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}
