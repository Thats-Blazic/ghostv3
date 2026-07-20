import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { CustomCursor } from '@/components/custom-cursor'
import { PageLoader } from '@/components/page-loader'
import { LanguageProvider } from '@/components/language-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const siteUrl = 'https://ghostforcestudio.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ghost Force Studio — Premium Creative Digital Agency',
    template: '%s — Ghost Force Studio',
  },
  description:
    'Ghost Force Studio creates premium websites, branding, UI/UX experiences, and digital solutions for ambitious businesses looking to stand out.',
  keywords: [
    'creative agency',
    'web design',
    'branding',
    'UI/UX design',
    'web development',
    'digital studio',
    'Ghost Force Studio',
  ],
  authors: [{ name: 'Ghost Force Studio' }],
  creator: 'Ghost Force Studio',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Ghost Force Studio — Premium Creative Digital Agency',
    description:
      'We build brands that people remember. Premium websites, branding, and digital experiences.',
    siteName: 'Ghost Force Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghost Force Studio — Premium Creative Digital Agency',
    description:
      'We build brands that people remember. Premium websites, branding, and digital experiences.',
    creator: '@ghostforce',
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-background text-foreground antialiased">
        <LanguageProvider>
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
          <BackToTop />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
