import type { Metadata } from 'next'
import { AboutContent } from '@/components/about-content'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Ghost Force Studio — a premium creative digital agency building unforgettable brands and high-performance websites worldwide.',
}

export default function AboutPage() {
  return <AboutContent />
}
