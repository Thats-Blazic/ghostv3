import type { Metadata } from 'next'
import { ServicesContent } from '@/components/services-content'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web development, UI/UX design, branding, e-commerce, SEO, and custom digital solutions by Ghost Force Studio.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
