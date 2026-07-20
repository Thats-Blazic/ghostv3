'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-provider'

const NAV_KEYS = {
  '/': 'home',
  '/projects': 'projects',
  '/services': 'services',
  '/about': 'about',
  '/process': 'process',
  '/testimonials': 'testimonials',
  '/contact': 'contact',
} as const

export function SiteNav() {
  const pathname = usePathname()
  const { navigation } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const localizedLinks = NAV_LINKS.map((link) => ({
    ...link,
    label: navigation[NAV_KEYS[link.href as keyof typeof NAV_KEYS]],
  }))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[100] transition-all duration-300',
          scrolled
            ? 'border-b border-white/10 bg-background/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            data-cursor="hover"
            className="font-heading text-lg font-bold tracking-tight text-foreground"
          >
            Ghost Force<span className="text-[color:var(--purple-3)]">.</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {localizedLinks.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-cursor="hover"
                    className={cn(
                      'relative rounded-full px-4 py-2 text-sm transition-colors',
                      active
                        ? 'text-white'
                        : 'text-muted-foreground hover:text-white',
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/5 ring-1 ring-white/10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              data-cursor="hover"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-6px_rgba(124,58,237,0.7)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              {navigation.startProject}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[110] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="glass-strong absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-bold">
                  {navigation.menu}
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {localizedLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-lg text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground"
              >
                {navigation.startProject}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
