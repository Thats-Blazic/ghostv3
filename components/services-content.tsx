'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react'
import { FaIcon } from '@/components/fa-icon'
import { CtaSection } from '@/components/cta-section'
import { Eyebrow } from '@/components/shared'
import { useLanguage } from '@/components/language-provider'
import { SERVICES } from '@/lib/site-data'

const srServices = {
  'web-development': ['Web development', 'Brzi, skalabilni sajtovi i aplikacije izrađeni modernim tehnologijama i sa preciznošću do poslednjeg piksela.'],
  'ui-ux-design': ['UI/UX dizajn', 'Intuitivni interfejsi zasnovani na istraživanju koji složene procese pretvaraju u jednostavna iskustva.'],
  branding: ['Brending', 'Prepoznatljivi identiteti sa jasnom strategijom, tonom komunikacije i vizuelnim sistemom.'],
  'logo-design': ['Dizajn logotipa', 'Pamtljivi znakovi i fleksibilni logo sistemi koji funkcionišu na svakom formatu.'],
  'graphic-design': ['Grafički dizajn', 'Snažni vizuelni materijali i kampanje koji čine vašu poruku nemogućom za ignorisanje.'],
  ecommerce: ['E-commerce', 'Prodavnice fokusirane na konverzije, jednostavnu kupovinu i globalni rast.'],
  'landing-pages': ['Landing stranice', 'Stranice visoke konverzije kreirane za lansiranja, kampanje i brz rast.'],
  'seo-optimization': ['SEO optimizacija', 'Tehnički i sadržajni SEO koji dugoročno povećava pozicije, posete i kvalitetne upite.'],
  'website-maintenance': ['Održavanje sajtova', 'Redovna ažuriranja, nadzor i podrška koji održavaju sajt brzim, sigurnim i aktuelnim.'],
  'website-hosting': ['Web hosting', 'Pouzdan managed hosting sa globalnom isporukom sadržaja i visokom dostupnošću.'],
  'performance-optimization': ['Optimizacija performansi', 'Detaljna analiza i optimizacija brzine koja poboljšava Core Web Vitals rezultate.'],
  'custom-web-applications': ['Web aplikacije po meri', 'Platforme, dashboardi i alati prilagođeni vašim poslovnim procesima.'],
} as const

const content = {
  en: {
    eyebrow: 'Capabilities',
    titleTop: 'Everything your brand',
    titleAccent: 'needs to move forward.',
    intro:
      'Strategy, design and development working as one focused team. Choose a single capability or bring us in for the complete journey.',
    explore: 'Explore capabilities',
    index: 'Service index',
    services: 'Core capabilities',
    servicesTitle: 'One partner. Every digital touchpoint.',
    included: 'Every engagement includes',
    benefits: ['Clear strategy', 'Senior-level craft', 'Responsive execution', 'Post-launch support'],
    methodEyebrow: 'Built for momentum',
    methodTitle: 'Less friction. Better decisions. Stronger work.',
    methodBody:
      'You work directly with the people designing and building your project. That means faster feedback, clearer ownership and no information lost between layers.',
    steps: [
      ['01', 'Align', 'We define the problem, audience and measurable outcome.'],
      ['02', 'Create', 'Strategy becomes a focused visual and technical system.'],
      ['03', 'Launch', 'We test, refine and ship with confidence.'],
      ['04', 'Grow', 'Ongoing insight and support keep the work performing.'],
    ],
    ctaTitle: 'Not sure what you need yet?',
    ctaSubtitle: 'Tell us where you want to go. We will map the clearest route forward.',
  },
  sr: {
    eyebrow: 'Mogućnosti',
    titleTop: 'Sve što vašem brendu',
    titleAccent: 'treba za sledeći korak.',
    intro:
      'Strategija, dizajn i development u jednom fokusiranom timu. Izaberite pojedinačnu uslugu ili nas uključite u ceo proces.',
    explore: 'Pogledaj usluge',
    index: 'Pregled usluga',
    services: 'Ključne usluge',
    servicesTitle: 'Jedan partner. Svaka digitalna tačka kontakta.',
    included: 'Svaka saradnja uključuje',
    benefits: ['Jasnu strategiju', 'Vrhunski kvalitet', 'Brzu realizaciju', 'Podršku nakon lansiranja'],
    methodEyebrow: 'Napravljeno za napredak',
    methodTitle: 'Manje prepreka. Bolje odluke. Jači rezultat.',
    methodBody:
      'Radite direktno sa ljudima koji dizajniraju i razvijaju vaš projekat. To donosi brže povratne informacije, jasnu odgovornost i efikasniju saradnju.',
    steps: [
      ['01', 'Usklađivanje', 'Definišemo problem, publiku i merljiv cilj.'],
      ['02', 'Kreiranje', 'Strategija postaje fokusiran vizuelni i tehnički sistem.'],
      ['03', 'Lansiranje', 'Testiramo, usavršavamo i objavljujemo sa sigurnošću.'],
      ['04', 'Rast', 'Kontinuirana podrška održava kvalitet i rezultate.'],
    ],
    ctaTitle: 'Još uvek niste sigurni šta vam treba?',
    ctaSubtitle: 'Recite nam gde želite da stignete. Predložićemo najjasniji put.',
  },
} as const

export function ServicesContent() {
  const { language } = useLanguage()
  const copy = content[language]

  const localizedServices = SERVICES.map((service) => {
    if (language === 'en') return service
    const translation = srServices[service.slug as keyof typeof srServices]
    return {
      ...service,
      title: translation?.[0] ?? service.title,
      description: translation?.[1] ?? service.description,
    }
  })

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
          <div className="absolute left-1/2 top-12 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]" />
          <motion.div
            className="absolute left-1/2 top-12 h-[30rem] w-[30rem] -translate-x-1/2 opacity-50"
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0%, rgba(192,132,252,0.35) 15%, transparent 35%, transparent 55%, rgba(124,58,237,0.3) 75%, transparent 100%)',
              filter: 'blur(40px)',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-6xl text-balance font-heading text-5xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-7xl lg:text-[7rem]"
          >
            {copy.titleTop}
            <br />
            <span className="text-gradient">{copy.titleAccent}</span>
          </motion.h1>
          <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {copy.intro}
            </p>
            <div className="flex items-end lg:justify-end">
              <a
                href="#services"
                className="inline-flex items-center gap-3 text-sm font-medium text-white"
              >
                {copy.explore}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                  <ArrowDownRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 md:pb-36">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {copy.index}
          </p>
          <div className="flex flex-wrap gap-3">
            {localizedServices.map((service, index) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-white"
              >
                <span className="font-heading text-[10px] text-[color:var(--purple-3)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-5 pb-24 sm:px-8 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
            {copy.services}
          </p>
          <h2 className="mt-5 max-w-4xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
            {copy.servicesTitle}
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {localizedServices.map((service, index) => (
              <motion.article
                id={service.slug}
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                data-cursor="hover"
                className="group relative min-h-72 scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--surface)]/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 sm:p-8"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[color:var(--purple-3)] transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-white">
                    <FaIcon name={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-heading text-xs text-white/15 transition-colors duration-300 group-hover:text-[color:var(--purple-3)]/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="relative mt-14 flex items-center gap-1.5 font-heading text-2xl font-semibold">
                  {service.title}
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--purple-3)] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </h3>
                <p className="relative mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div
                  aria-hidden
                  className="relative mt-6 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[color:var(--purple-3)]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--purple-3)]">
              {copy.methodEyebrow}
            </p>
            <h2 className="mt-5 max-w-xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              {copy.methodTitle}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
              {copy.methodBody}
            </p>
            <div className="mt-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {copy.included}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {copy.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-[color:var(--purple-3)]" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10">
            {copy.steps.map(([number, title, description]) => (
              <div
                key={number}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/10 py-7"
              >
                <span className="font-heading text-xs text-[color:var(--purple-3)]">
                  {number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title={copy.ctaTitle} subtitle={copy.ctaSubtitle} />
    </>
  )
}
