'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroSection } from '@/components/hero-section'
import { ClientMarquee } from '@/components/client-marquee'
import { SectionHeading } from '@/components/shared'
import { ServiceCard } from '@/components/service-card'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { WhyChooseUs } from '@/components/why-choose-us'
import { TechStack } from '@/components/tech-stack'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { FaqAccordion } from '@/components/faq-accordion'
import { CtaSection } from '@/components/cta-section'
import { MagneticButton } from '@/components/magnetic-button'
import { SERVICES } from '@/lib/site-data'
import { useLanguage } from '@/components/language-provider'

export default function HomePage() {
  const { language } = useLanguage()
  const sr = language === 'sr'

  return (
    <>
      <HeroSection />
      <ClientMarquee />

      {/* Services */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={sr ? 'Šta radimo' : 'What We Do'}
            title={sr ? 'Usluge koje vaš brend izdvajaju' : 'Services built to make you unmissable'}
            subtitle={
              sr
                ? 'Od prve skice do lansiranja, nudimo sve što je potrebno za snažno digitalno prisustvo.'
                : 'From first sketch to final deploy, we offer everything you need to launch and grow a standout digital presence.'
            }
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <MagneticButton href="/services" variant="ghost">
              {sr ? 'Pogledaj sve usluge' : 'Explore All Services'}
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              center={false}
              eyebrow={sr ? 'Odabrani radovi' : 'Selected Work'}
              title={sr ? 'Projekti na koje smo ponosni' : 'Projects we are proud of'}
              subtitle={
                sr
                  ? 'Sajtovi, baneri i thumbnailovi — radovi koji govore sami za sebe.'
                  : 'Websites, banners and thumbnails — visual work that speaks for itself.'
              }
            />
            <Link
              href="/projects"
              data-cursor="hover"
              className="hidden shrink-0 items-center gap-2 text-sm font-medium text-[color:var(--purple-3)] transition-colors hover:text-white md:inline-flex"
            >
              {sr ? 'Pogledaj sve projekte' : 'View all projects'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14">
            <PortfolioGallery limit={8} />
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TechStack />

      {/* Testimonials */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={sr ? 'Reči klijenata' : 'Kind Words'}
            title={sr ? 'Poverenje ambicioznih timova' : 'Loved by ambitious teams'}
            subtitle={
              sr
                ? 'Uspeh merimo rezultatima i odnosima koje gradimo sa klijentima.'
                : 'We measure success by the results and relationships we build with our clients.'
            }
          />
          <div className="mt-14">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title={sr ? 'Odgovori na važna pitanja' : 'Questions, answered'}
            subtitle={
              sr
                ? 'Sve što treba da znate pre početka naše saradnje.'
                : 'Everything you need to know before we start working together.'
            }
          />
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
