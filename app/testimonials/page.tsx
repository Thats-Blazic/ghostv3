import type { Metadata } from 'next'
import { TestimonialsContent } from '@/components/testimonials-content'

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what clients say about working with Ghost Force Studio on websites, branding, and digital products.',
}

export default function TestimonialsPage() {
  return <TestimonialsContent />
}
