'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { FaBehance, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { ContactForm } from '@/components/contact-form'
import { CONTACT_INFO } from '@/lib/site-data'

const socials = [
  { icon: FaInstagram, href: CONTACT_INFO.socials.instagram, label: 'Instagram' },
  { icon: FaBehance, href: CONTACT_INFO.socials.behance, label: 'Behance' },
  { icon: FaGithub, href: CONTACT_INFO.socials.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: CONTACT_INFO.socials.linkedin, label: 'LinkedIn' },
]

export function ContactContent() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
          <div className="absolute left-[58%] top-10 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
            Start a conversation
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-6xl text-balance font-heading text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[7rem]"
          >
            Have an idea?
            <br />
            <span className="text-gradient">Let us make it real.</span>
          </motion.h1>
          <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Tell us what you are building, where you want to go and what success
              looks like. We will reply with clear next steps.
            </p>
            <div className="flex items-end lg:justify-end">
              <a href="#inquiry" className="inline-flex items-center gap-3 text-sm font-medium">
                Send an inquiry
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                  <ArrowDownRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="px-5 pb-24 sm:px-8 md:pb-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
              Contact details
            </p>
            <h2 className="mt-5 max-w-md text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              The next great project can start here.
            </h2>

            <div className="mt-10 border-t border-white/10">
              <ContactRow
                icon={Mail}
                label="Email"
                value={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
              />
              <ContactRow
                icon={Phone}
                label="Phone / WhatsApp"
                value={CONTACT_INFO.phone}
                href={CONTACT_INFO.whatsapp}
              />
              <ContactRow
                icon={MapPin}
                label="Location"
                value={CONTACT_INFO.address}
              />
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm">
              <span className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.7)]" />
                Available for selected projects
              </span>
              <span className="hidden text-muted-foreground sm:inline">Replies within 1–2 business days</span>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ['01', 'Share the context', 'Goals, audience, scope and any useful references.'],
            ['02', 'Get a clear response', 'We reply with questions, fit and the best next step.'],
            ['03', 'Build the plan', 'Together we define scope, timing and investment.'],
          ].map(([number, title, description]) => (
            <article key={number} className="border-t border-white/10 pt-6">
              <span className="font-heading text-xs text-[color:var(--purple-3)]">{number}</span>
              <h3 className="mt-8 font-heading text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="group flex items-center justify-between gap-5 py-5">
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[color:var(--purple-3)]">
          <Icon className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="mt-1 text-sm font-medium">{value}</p>
        </div>
      </div>
      {href && <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />}
    </div>
  )

  return href ? (
    <Link href={href} target={href.startsWith('http') ? '_blank' : undefined} className="block border-b border-white/10">
      {content}
    </Link>
  ) : (
    <div className="border-b border-white/10">{content}</div>
  )
}
