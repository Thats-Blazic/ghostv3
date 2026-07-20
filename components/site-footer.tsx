'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FaInstagram, FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { NAV_LINKS, SERVICES, PROJECTS, CONTACT_INFO } from '@/lib/site-data'
import { useLanguage } from '@/components/language-provider'

const socials = [
  { icon: FaInstagram, href: CONTACT_INFO.socials.instagram, label: 'Instagram' },
  { icon: FaBehance, href: CONTACT_INFO.socials.behance, label: 'Behance' },
  { icon: FaGithub, href: CONTACT_INFO.socials.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: CONTACT_INFO.socials.linkedin, label: 'LinkedIn' },
]

export function SiteFooter() {
  const { language, navigation } = useLanguage()
  const navLabels: Record<string, string> = {
    '/': navigation.home,
    '/projects': navigation.projects,
    '/services': navigation.services,
    '/about': navigation.about,
    '/process': navigation.process,
    '/testimonials': navigation.testimonials,
    '/contact': navigation.contact,
  }
  const srServiceTitles: Record<string, string> = {
    'web-development': 'Web development',
    'ui-ux-design': 'UI/UX dizajn',
    branding: 'Brending',
    'logo-design': 'Dizajn logotipa',
    'graphic-design': 'Grafički dizajn',
    ecommerce: 'E-commerce',
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[color:var(--surface)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading text-2xl font-bold tracking-tight"
            >
              Ghost Force<span className="text-[color:var(--purple-3)]">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              {language === 'en'
                ? 'We build brands that people remember. Premium websites, branding, and digital experiences for ambitious businesses worldwide.'
                : 'Gradimo brendove koji se pamte. Premium sajtovi, brending i digitalna iskustva za ambiciozne kompanije širom sveta.'}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-cursor="hover"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title={language === 'en' ? 'Navigation' : 'Navigacija'}>
            {NAV_LINKS.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {navLabels[l.href] ?? l.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={navigation.services}>
            {SERVICES.slice(0, 6).map((s) => (
              <FooterLink key={s.slug} href="/services">
                {language === 'sr' ? srServiceTitles[s.slug] ?? s.title : s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={navigation.projects}>
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="text-sm text-muted-foreground transition-colors hover:text-white"
                >
                  {p.title}
                </a>
              </li>
            ))}
            <FooterLink href="/projects">
              {language === 'en' ? 'View all work' : 'Pogledaj sve projekte'}
            </FooterLink>
            <FooterLink href="/contact">{navigation.contact}</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Ghost Force Studio.{' '}
            {language === 'en' ? 'All rights reserved.' : 'Sva prava zadržana.'}
          </p>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            data-cursor="hover"
            className="inline-flex items-center gap-1 transition-colors hover:text-white"
          >
            {CONTACT_INFO.email}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        data-cursor="hover"
        className="text-sm text-muted-foreground transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}
