import type { Metadata } from 'next'
import { ProcessContent } from '@/components/process-content'

export const metadata: Metadata = {
  title: 'Process',
  description:
    'Our proven nine-step process from discovery to launch and ongoing support — how Ghost Force Studio delivers premium digital products.',
}

export default function ProcessPage() {
  return <ProcessContent />
}
