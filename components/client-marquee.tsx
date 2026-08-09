'use client'

import Image from 'next/image'
import { PARTNERS } from '@/lib/site-data'

export function ClientMarquee() {
  const items = [...PARTNERS, ...PARTNERS]

  return (
    <section className="relative border-y border-white/5 bg-white/[0.02] py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
      />
      <p className="relative mb-8 flex items-center justify-center gap-3 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
        Trusted by ambitious brands
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-16 px-8 sm:gap-20">
          {items.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex shrink-0 items-center justify-center px-2 transition-opacity duration-300 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={180}
                height={64}
                className="h-8 w-auto max-w-[140px] object-contain opacity-45 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10 sm:max-w-[160px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
