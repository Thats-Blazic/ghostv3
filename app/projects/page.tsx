import type { Metadata } from 'next'
import { ProjectsContent } from '@/components/projects-content'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Ghost Force Studio portfolio — websites, banners, and thumbnails.',
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
