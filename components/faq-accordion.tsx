'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, MessageCircleQuestion, Plus } from 'lucide-react'
import { FAQS } from '@/lib/site-data'
import { useLanguage } from '@/components/language-provider'

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  const { language } = useLanguage()

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_15rem] lg:items-start lg:gap-10">
      <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--surface)]/50">
        {FAQS.map((faq, i) => {
          const isOpen = open === i
          return (
            <div key={faq.q}>
              <button
                type="button"
                data-cursor="hover"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/5"
              >
                <span className="flex items-start gap-3">
                  <span className="mt-0.5 font-heading text-xs font-medium tracking-[0.15em] text-[color:var(--purple-3)]/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-base font-medium sm:text-lg">
                    {faq.q}
                  </span>
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                    isOpen
                      ? 'border-primary/40 bg-primary/15 text-[color:var(--purple-3)]'
                      : 'border-white/10 text-muted-foreground'
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 pl-[3.25rem] text-pretty leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-gradient relative overflow-hidden rounded-3xl p-6 text-center lg:sticky lg:top-28 lg:text-left"
      >
        <div
          aria-hidden
          className="animate-blob pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/25 blur-[70px]"
        />
        <div className="relative flex flex-col items-center gap-3 lg:items-start">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-[color:var(--purple-3)]">
            <MessageCircleQuestion className="h-5 w-5" />
          </span>
          <p className="font-heading text-base font-semibold">
            {language === 'en' ? 'Still have questions?' : 'Imate još pitanja?'}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {language === 'en'
              ? "We're happy to walk you through it, no strings attached."
              : 'Rado ćemo vam sve objasniti, bez obaveza.'}
          </p>
          <Link
            href="/contact"
            data-cursor="hover"
            className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--purple-3)] transition-colors hover:text-white"
          >
            {language === 'en' ? 'Get in touch' : 'Kontaktirajte nas'}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
