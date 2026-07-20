import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact-content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ghost Force Studio — start your next website, branding, or digital product project today.',
}

export default function ContactPage() {
  return <ContactContent />
}
