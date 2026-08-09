'use client'

import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  Circle,
  MousePointer2,
  PenLine,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { useEffect, useRef, useState, type ComponentType } from 'react'
import { MagneticButton } from '@/components/magnetic-button'
import { Counter, Eyebrow } from '@/components/shared'
import { STATS } from '@/lib/site-data'
import { useLanguage } from '@/components/language-provider'

const easeOut = [0.22, 1, 0.36, 1] as const

const TICKER_ITEMS = [
  'Web Design',
  'Branding',
  'UI/UX',
  'Motion',
  'Development',
  'Creative Direction',
]

type IconFloater = {
  kind: 'icon'
  Icon: ComponentType<{ size?: number }>
  left: string
  top: string
  speed: number
  size: number
  delay: number
}

type RingFloater = {
  kind: 'ring'
  left: string
  top: string
  speed: number
  size: number
  delay: number
}

type Floater = IconFloater | RingFloater

const FLOATERS: Floater[] = [
  { kind: 'icon', Icon: Wrench, left: '10%', top: '20%', speed: -100, size: 22, delay: 0.1 },
  { kind: 'icon', Icon: PenLine, left: '87%', top: '18%', speed: 90, size: 24, delay: 0.15 },
  { kind: 'icon', Icon: Sparkles, left: '15%', top: '74%', speed: -70, size: 20, delay: 0.2 },
  { kind: 'icon', Icon: MousePointer2, left: '84%', top: '70%', speed: 80, size: 22, delay: 0.25 },
  { kind: 'ring', left: '22%', top: '46%', speed: 60, size: 46, delay: 0.05 },
  { kind: 'ring', left: '78%', top: '40%', speed: -60, size: 30, delay: 0.3 },
]

const EMBERS = [
  { left: '18%', delay: 0 },
  { left: '32%', delay: 1.2 },
  { left: '48%', delay: 2.4 },
  { left: '64%', delay: 0.8 },
  { left: '78%', delay: 3.1 },
  { left: '88%', delay: 1.8 },
]

function ScrollFloater({
  floater,
  scrollYProgress,
}: {
  floater: Floater
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, floater.speed])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, floater.speed * 0.12])
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.7, 0.92], [0, 0.8, 0.6, 0])

  if (floater.kind === 'ring') {
    return (
      <motion.div
        aria-hidden
        className="pointer-events-none absolute hidden rounded-full border border-[color:var(--purple-3)]/25 sm:block"
        style={{
          left: floater.left,
          top: floater.top,
          width: floater.size,
          height: floater.size,
          y,
          rotate,
          opacity,
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 + floater.delay, duration: 0.7 }}
      />
    )
  }

  const { Icon, size } = floater
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute hidden rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-[color:var(--purple-3)] shadow-[0_0_30px_-8px_rgba(168,85,247,0.45)] backdrop-blur-sm sm:flex"
      style={{ left: floater.left, top: floater.top, y, rotate, opacity }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8 + floater.delay, duration: 0.6 }}
    >
      <Icon size={size} />
    </motion.div>
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}

export function HeroSection() {
  const { language } = useLanguage()
  const reducedMotion = usePrefersReducedMotion()
  const containerRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 70, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 70, damping: 20 })

  const { scrollYProgress: rawScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const scrollYProgress = useSpring(rawScrollProgress, {
    stiffness: 260,
    damping: 38,
    mass: 0.4,
    restDelta: 0.0005,
  })

  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'radial-gradient(circle at 50% 40%, #120a24 0%, #050505 55%, #000 100%)',
      'radial-gradient(circle at 50% 36%, #2e1065 0%, #150a2e 46%, #050505 100%)',
      'radial-gradient(circle at 50% 34%, #7c3aed 0%, #2e1065 42%, #050505 100%)',
      'radial-gradient(circle at 50% 40%, #3b0f78 0%, #150a2e 48%, #050505 100%)',
      'radial-gradient(circle at 50% 48%, #0d0716 0%, #050505 58%, #000 100%)',
    ],
  )

  const glowOpacity = useTransform(scrollYProgress, [0, 0.32, 0.55, 0.75, 0.92], [0.25, 1, 0.7, 0.2, 0])
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1.3, 0.9])

  const haloRotate = useTransform(scrollYProgress, [0, 1], [0, 90])
  const haloOpacity = useTransform(scrollYProgress, [0, 0.14, 0.75, 0.92], [0, 0.9, 0.6, 0])

  const logoScale = useTransform(
    scrollYProgress,
    reducedMotion ? [0, 1] : [0, 0.22, 0.48, 0.7, 0.92],
    reducedMotion ? [1, 1] : [0.5, 1.1, 0.9, 0.65, 0.38],
  )
  const logoY = useTransform(
    scrollYProgress,
    reducedMotion ? [0, 1] : [0, 0.35, 0.62, 0.92],
    reducedMotion ? [0, 0] : [110, 0, -50, -190],
  )
  const logoX = useTransform(
    scrollYProgress,
    reducedMotion ? [0, 1] : [0, 0.52, 0.78, 0.92],
    reducedMotion ? [0, 0] : [0, 0, -110, -260],
  )
  const logoRotate = useTransform(
    scrollYProgress,
    reducedMotion ? [0, 1] : [0, 0.35, 0.68, 0.92],
    reducedMotion ? [0, 0] : [-10, 0, 5, 12],
  )
  const logoOpacity = useTransform(scrollYProgress, [0, 0.06, 0.72, 0.9], [0, 1, 1, 0])

  const logoMouseX = useTransform(springX, [-1, 1], [-16, 16])
  const logoMouseY = useTransform(springY, [-1, 1], [-12, 12])

  const contentOpacity = useTransform(
    scrollYProgress,
    reducedMotion ? [0, 0.2] : [0.52, 0.68, 0.74, 0.9],
    reducedMotion ? [0, 1] : [0, 1, 1, 0],
  )
  const contentY = useTransform(
    scrollYProgress,
    reducedMotion ? [0, 0.2] : [0.52, 0.68],
    [44, 0],
  )
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08, 0.2], [1, 1, 0])

  const speedLineOpacity = useTransform(scrollYProgress, [0, 0.14, 0.46, 0.72, 0.9], [0.2, 0.7, 0.55, 0.15, 0])
  const tickerOpacity = useTransform(scrollYProgress, [0.05, 0.18, 0.66, 0.84], [0, 1, 0.8, 0])
  const fadeOutOpacity = useTransform(scrollYProgress, [0.68, 0.9], [0, 1])

  useEffect(() => {
    if (reducedMotion) return

    function onMove(e: MouseEvent) {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      mouseX.set(nx)
      mouseY.set(ny)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY, reducedMotion])

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
          scroll: 'Scroll to explore',
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
          scroll: 'Skroluj da istražiš',
        }

  return (
    <section
      ref={containerRef}
      className="relative isolate bg-background"
      style={{ height: reducedMotion ? 'auto' : '200vh' }}
    >
      <div
        className={
          reducedMotion
            ? 'relative flex min-h-[92svh] items-center overflow-hidden px-6 pb-20 pt-28'
            : 'sticky top-0 h-svh overflow-hidden'
        }
      >
        <motion.div aria-hidden className="absolute inset-0" style={{ background }} />

        <motion.div
          aria-hidden
          className="hero-speed-lines pointer-events-none absolute inset-0"
          style={{ opacity: speedLineOpacity }}
        />
        <motion.div
          aria-hidden
          className="hero-speed-lines-accent animate-speed-lines pointer-events-none absolute inset-0"
          style={{ opacity: speedLineOpacity }}
        />
        <div aria-hidden className="hero-scanlines pointer-events-none absolute inset-0 opacity-60" />
        <div aria-hidden className="pointer-events-none absolute inset-0 noise opacity-[0.03]" />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[130px]"
          style={{ opacity: glowOpacity, scale: glowScale }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--purple-3)]/20 blur-[110px] animate-pulse-glow"
          style={{ opacity: glowOpacity, scale: glowScale }}
        />

        {!reducedMotion &&
          EMBERS.map((ember, i) => (
            <div
              key={i}
              aria-hidden
              className="animate-drift-up pointer-events-none absolute bottom-24 hidden h-1.5 w-1.5 rounded-full bg-[color:var(--purple-3)]/70 shadow-[0_0_8px_rgba(192,132,252,0.8)] sm:block"
              style={{ left: ember.left, animationDelay: `${ember.delay}s` }}
            />
          ))}

        {!reducedMotion &&
          FLOATERS.map((floater, index) => (
            <ScrollFloater key={index} floater={floater} scrollYProgress={scrollYProgress} />
          ))}

        <motion.div
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          style={{
            scale: logoScale,
            y: logoY,
            x: logoX,
            rotate: logoRotate,
            opacity: logoOpacity,
          }}
        >
          <motion.div
            style={reducedMotion ? undefined : { x: logoMouseX, y: logoMouseY }}
            className="relative flex items-center justify-center"
          >
            {!reducedMotion && (
              <motion.div
                aria-hidden
                className="absolute h-[150%] w-[150%] rounded-full"
                style={{
                  opacity: haloOpacity,
                  rotate: haloRotate,
                  background:
                    'conic-gradient(from 0deg, transparent 0%, rgba(192,132,252,0.55) 18%, transparent 40%, transparent 60%, rgba(124,58,237,0.5) 78%, transparent 100%)',
                  filter: 'blur(18px)',
                }}
              />
            )}

            {!reducedMotion && (
              <motion.div
                aria-hidden
                className="absolute h-[128%] w-[128%]"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                style={{ opacity: haloOpacity }}
              >
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[color:var(--purple-3)] shadow-[0_0_12px_rgba(192,132,252,0.9)]" />
                <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_10px_rgba(124,58,237,0.9)]" />
              </motion.div>
            )}

            <div className="absolute inset-0 scale-110 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute inset-0 scale-125 rounded-full bg-[color:var(--purple-3)]/15 blur-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.7, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: easeOut, delay: 0.15 }}
              className="relative h-[clamp(6.5rem,20vw,13rem)] w-[clamp(6.5rem,20vw,13rem)]"
            >
              <Image
                src="/ghost-logo.png"
                alt="Ghost Force Studio"
                fill
                priority
                className="object-contain drop-shadow-[0_0_45px_rgba(168,85,247,0.5)]"
                sizes="(max-width: 768px) 40vw, 260px"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {!reducedMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[14%] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
            style={{ opacity: tickerOpacity }}
          >
            <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 text-xs font-medium uppercase tracking-[0.3em] text-white/25"
                >
                  {item}
                  <Circle className="h-1.5 w-1.5 fill-[color:var(--purple-3)]/50 text-transparent" />
                </span>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          className="relative z-30 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-24 text-center"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reducedMotion ? 0.2 : 0 }}
          >
            <Eyebrow>{copy.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: reducedMotion ? 0.3 : 0.05 }}
            className="mt-7 max-w-5xl text-balance font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]"
          >
            {copy.title}
            <br />
            <span className="text-shimmer">{copy.accent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reducedMotion ? 0.4 : 0.2 }}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {copy.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reducedMotion ? 0.5 : 0.32 }}
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
            transition={{ duration: 0.8, delay: reducedMotion ? 0.6 : 0.48 }}
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
        </motion.div>

        {!reducedMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-3"
            style={{ opacity: scrollHintOpacity }}
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
              {copy.scroll}
            </span>
            <div className="relative h-12 w-px overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute left-0 top-0 h-4 w-full bg-gradient-to-b from-[color:var(--purple-3)] to-primary"
                animate={{ y: [0, 32, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        )}

        {!reducedMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-50 bg-background"
            style={{ opacity: fadeOutOpacity }}
          />
        )}
      </div>
    </section>
  )
}
