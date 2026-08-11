'use client'

import Image from 'next/image'
import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { Palette, Sparkles, Users } from 'lucide-react'
import { SectionHeading } from '@/components/shared'
import { TEAM, type TeamMember } from '@/lib/site-data'

const ROLE_ICON: Record<string, typeof Palette> = {
  'Graphic & Web Designer': Palette,
  'Community Manager': Users,
}

const TAGS: Record<string, string[]> = {
  'Ognjen Blažić': ['Web Design', 'Branding', 'UI/UX'],
  'Bojan Milenković': ['Community', 'Social Media', 'Support'],
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })
  const glareX = useMotionValue(50)
  const glareY = useMotionValue(50)
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(192,132,252,0.25), transparent 60%)`

  const Icon = ROLE_ICON[member.role] ?? Sparkles
  const tags = TAGS[member.name] ?? []

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 14)
    rotateX.set((0.5 - py) * 14)
    glareX.set(px * 100)
    glareY.set(py * 100)
  }

  function handleLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        data-cursor="hover"
        style={{ rotateX: springRotateX, rotateY: springRotateY }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--surface)]/60 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-14 -top-14 z-10 h-40 w-40 rounded-full opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0%, rgba(192,132,252,0.5) 20%, transparent 45%, transparent 65%, rgba(124,58,237,0.45) 85%, transparent 100%)',
            filter: 'blur(20px)',
          }}
        />

        <span className="absolute right-5 top-5 z-20 font-heading text-xs font-medium tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-[color:var(--purple-3)]/60">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="relative aspect-[4/5] overflow-hidden" style={{ transform: 'translateZ(0)' }}>
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 640px) 100vw, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.35, type: 'spring', stiffness: 260, damping: 16 }}
            className="absolute bottom-4 left-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-[color:var(--purple-3)] shadow-[0_0_20px_-4px_rgba(168,85,247,0.6)] backdrop-blur-md"
          >
            <Icon className="h-5 w-5" />
          </motion.span>
        </div>

        <div className="relative z-20 p-6" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="font-heading text-xl font-semibold tracking-tight">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-[color:var(--purple-3)]">
            {member.role}
          </p>
          {member.meta && (
            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {member.meta}
            </p>
          )}

          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div
          aria-hidden
          className="relative z-20 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[color:var(--purple-3)]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
        />
      </motion.div>
    </motion.div>
  )
}

export function TeamSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0%, rgba(192,132,252,0.35) 15%, transparent 35%, transparent 55%, rgba(124,58,237,0.3) 75%, transparent 100%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind the work"
          subtitle="A small, focused team that designs, builds and ships every project personally."
        />

        <div className="mt-14 mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {TEAM.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
