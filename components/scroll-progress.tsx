'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[10000] h-0.5 w-full origin-left bg-gradient-to-r from-[color:var(--purple)] via-[color:var(--purple-2)] to-[color:var(--purple-3)]"
    />
  )
}
