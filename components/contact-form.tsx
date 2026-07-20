'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { BUDGET_OPTIONS, PROJECT_TYPES } from '@/lib/site-data'
import { useLanguage } from '@/components/language-provider'

type Status = 'idle' | 'loading' | 'success'

export function ContactForm() {
  const { language } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')
  const sr = language === 'sr'
  const projectTypeLabels: Record<string, string> = {
    Website: 'Sajt',
    'Web Application': 'Web aplikacija',
    'E-commerce': 'E-commerce',
    Branding: 'Brending',
    'UI/UX Design': 'UI/UX dizajn',
    'Graphic Design': 'Grafički dizajn',
    Other: 'Ostalo',
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status !== 'idle') return
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => setStatus('idle'), 4000)
      ;(e.target as HTMLFormElement).reset()
    }, 1600)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-strong rounded-3xl p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={sr ? 'Ime' : 'Name'} htmlFor="name">
          <input id="name" name="name" required placeholder="Jane Doe" className={inputClass} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required placeholder="jane@company.com" className={inputClass} />
        </Field>
        <Field label={sr ? 'Kompanija' : 'Company'} htmlFor="company">
          <input id="company" name="company" placeholder={sr ? 'Naziv kompanije' : 'Company Inc.'} className={inputClass} />
        </Field>
        <Field label={sr ? 'Budžet' : 'Budget'} htmlFor="budget">
          <select id="budget" name="budget" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              {sr ? 'Izaberite raspon' : 'Select a range'}
            </option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b} className="bg-[color:var(--surface)]">
                {b}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label={sr ? 'Tip projekta' : 'Project Type'} htmlFor="type">
            <select id="type" name="type" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                {sr ? 'Šta vam je potrebno?' : 'What do you need?'}
              </option>
              {PROJECT_TYPES.map((p) => (
                <option key={p} value={p} className="bg-[color:var(--surface)]">
                  {sr ? projectTypeLabels[p] ?? p : p}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label={sr ? 'Poruka' : 'Message'} htmlFor="message">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder={
                sr
                  ? 'Opišite projekat, ciljeve i očekivane rokove...'
                  : 'Tell us about your project, goals, and timeline...'
              }
              className={`${inputClass} resize-none`}
            />
          </Field>
        </div>
      </div>

      <motion.button
        type="submit"
        data-cursor="hover"
        disabled={status !== 'idle'}
        whileHover={{ y: status === 'idle' ? -2 : 0 }}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-6px_rgba(124,58,237,0.7)] transition-colors disabled:opacity-90"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === 'idle' && (
            <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {sr ? 'Pošalji poruku' : 'Send Message'} <ArrowRight className="h-4 w-4" />
            </motion.span>
          )}
          {status === 'loading' && (
            <motion.span key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Loader2 className="h-4 w-4 animate-spin" /> {sr ? 'Slanje...' : 'Sending...'}
            </motion.span>
          )}
          {status === 'success' && (
            <motion.span key="success" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Check className="h-4 w-4" /> {sr ? 'Poruka je poslata!' : 'Message sent!'}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  )
}

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/40'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
