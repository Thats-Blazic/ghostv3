export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Countries Served' },
]

export type Partner = {
  name: string
  logo: string
}

export const PARTNERS: Partner[] = [
  { name: 'Merkur', logo: '/partner/merkur.svg' },
  { name: 'Venom', logo: '/partner/venom.svg' },
  { name: 'Testorize', logo: '/partner/testorize-logo.svg' },
  { name: 'File7', logo: '/partner/file7.svg' },
  { name: 'Bumble', logo: '/partner/partner3.svg' },
  { name: 'Revolut', logo: '/partner/parner2.svg' },
]

export type Service = {
  slug: string
  icon: string // font awesome class suffix
  title: string
  description: string
}

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    icon: 'code',
    title: 'Web Development',
    description:
      'High-performance, scalable websites and apps built with modern frameworks and pixel-perfect precision.',
  },
  {
    slug: 'ui-ux-design',
    icon: 'pen-ruler',
    title: 'UI/UX Design',
    description:
      'Intuitive, research-driven interfaces that turn complex flows into effortless, delightful experiences.',
  },
  {
    slug: 'branding',
    icon: 'fingerprint',
    title: 'Branding',
    description:
      'Distinct brand identities with strategy, voice, and visual systems that command attention.',
  },
  {
    slug: 'logo-design',
    icon: 'shapes',
    title: 'Logo Design',
    description:
      'Memorable marks and logo systems crafted to scale beautifully across every touchpoint.',
  },
  {
    slug: 'graphic-design',
    icon: 'palette',
    title: 'Graphic Design',
    description:
      'Bold visual assets, campaigns, and collateral that make your message impossible to ignore.',
  },
  {
    slug: 'ecommerce',
    icon: 'cart-shopping',
    title: 'E-commerce',
    description:
      'Conversion-focused storefronts with seamless checkout, built to sell and scale globally.',
  },
  {
    slug: 'landing-pages',
    icon: 'rocket',
    title: 'Landing Pages',
    description:
      'High-converting landing pages engineered for launches, campaigns, and rapid growth.',
  },
  {
    slug: 'seo-optimization',
    icon: 'magnifying-glass-chart',
    title: 'SEO Optimization',
    description:
      'Technical and content SEO that lifts rankings, traffic, and qualified leads over time.',
  },
  {
    slug: 'website-maintenance',
    icon: 'screwdriver-wrench',
    title: 'Website Maintenance',
    description:
      'Proactive updates, monitoring, and support that keep your site fast, secure, and current.',
  },
  {
    slug: 'website-hosting',
    icon: 'server',
    title: 'Website Hosting',
    description:
      'Managed, globally distributed hosting with edge delivery and rock-solid uptime.',
  },
  {
    slug: 'performance-optimization',
    icon: 'gauge-high',
    title: 'Performance Optimization',
    description:
      'Speed audits and optimizations that push Core Web Vitals into the green, every time.',
  },
  {
    slug: 'custom-web-applications',
    icon: 'layer-group',
    title: 'Custom Web Applications',
    description:
      'Bespoke platforms, dashboards, and tools tailored to your unique business logic.',
  },
]


export { PORTFOLIO, WEBSITE_PROJECTS, PROJECTS, PORTFOLIO_CATEGORIES } from './portfolio-data'
export type { PortfolioItem, PortfolioType } from './portfolio-data'

export type Testimonial = {
  quote: string
  name: string
  company: string
  rating: number
  image: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Ghost Force Studio delivered beyond our wildest expectations. Our conversion rate more than doubled within weeks of launch.',
    name: 'Elena Márquez',
    company: 'VP Product, Aurora',
    rating: 5,
    image: '/testimonials/person-1.png',
  },
  {
    quote:
      'The most professional creative team we have ever worked with. They understood our vision instantly and elevated it.',
    name: 'Julien Rousseau',
    company: 'Creative Director, Noir',
    rating: 5,
    image: '/testimonials/person-2.png',
  },
  {
    quote:
      'Every detail was considered. The animations, the performance, the brand — all flawless. Truly world-class work.',
    name: 'Amara Okafor',
    company: 'CEO, Verdant',
    rating: 5,
    image: '/testimonials/person-3.png',
  },
  {
    quote:
      'They turned a complex technical product into a story that sells. Our best marketing investment to date.',
    name: 'Devon Park',
    company: 'Head of Growth, Quantum',
    rating: 5,
    image: '/testimonials/person-4.png',
  },
  {
    quote:
      'Fast, reliable, and endlessly creative. Ghost Force feels like an extension of our own team.',
    name: 'Marcus Lee',
    company: 'Founder, Pulse',
    rating: 5,
    image: '/testimonials/person-5.png',
  },
  {
    quote:
      'A rebrand that opened doors we could not open before. The quality of their work is simply unmatched.',
    name: 'Sofia Bianchi',
    company: 'CMO, Meridian',
    rating: 5,
    image: '/testimonials/person-6.png',
  },
]

export type ProcessStep = {
  icon: string
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: 'compass',
    title: 'Discovery',
    description:
      'We dig deep into your goals, audience, and market to build a foundation of shared understanding.',
  },
  {
    icon: 'magnifying-glass',
    title: 'Research',
    description:
      'Competitive analysis, user insights, and data shape a strategy grounded in reality.',
  },
  {
    icon: 'chess',
    title: 'Strategy',
    description:
      'We define positioning, architecture, and a roadmap that aligns design with business outcomes.',
  },
  {
    icon: 'pen-ruler',
    title: 'Wireframing',
    description:
      'Low-fidelity blueprints map every flow and screen before a single pixel is polished.',
  },
  {
    icon: 'palette',
    title: 'UI Design',
    description:
      'We craft a premium, cohesive visual system with motion baked in from the start.',
  },
  {
    icon: 'code',
    title: 'Development',
    description:
      'Clean, scalable, high-performance code brings the design to life across every device.',
  },
  {
    icon: 'vial',
    title: 'Testing',
    description:
      'Rigorous QA, accessibility, and performance testing ensure everything is flawless.',
  },
  {
    icon: 'rocket',
    title: 'Launch',
    description:
      'A smooth, monitored deployment gets your product in front of the world with confidence.',
  },
  {
    icon: 'life-ring',
    title: 'Support',
    description:
      'Ongoing optimization, maintenance, and partnership keep you growing long after launch.',
  },
]

export const CORE_VALUES = [
  {
    icon: 'gem',
    title: 'Craft',
    description: 'We obsess over every detail because excellence lives in the details.',
  },
  {
    icon: 'bolt',
    title: 'Speed',
    description: 'We move fast without ever compromising on quality or care.',
  },
  {
    icon: 'handshake',
    title: 'Partnership',
    description: 'We work as an extension of your team, invested in your success.',
  },
  {
    icon: 'lightbulb',
    title: 'Innovation',
    description: 'We push boundaries and challenge conventions to stand out.',
  },
]

export const TIMELINE = [
  { year: '2021', title: 'The Beginning', description: 'Ghost Force Studio founded with a mission to build unforgettable brands.' },
  { year: '2022', title: 'First 10 Clients', description: 'Delivered our first ten projects and earned a reputation for quality.' },
  { year: '2023', title: 'Going Global', description: 'Expanded to serve clients across three continents.' },
  { year: '2024', title: 'Award Recognition', description: 'Recognized by design communities for excellence in web craft.' },
  { year: '2025', title: '50+ Projects', description: 'Surpassed fifty premium projects with a worldwide client base.' },
]

export const WHY_CHOOSE_US = [
  'Premium Design',
  'Lightning Fast Performance',
  'Fully Responsive',
  'SEO Optimized',
  'Secure',
  'Scalable',
  'Easy To Manage',
  'Ongoing Support',
]

export type TechItem = { name: string; icon: string }

export const TECH_STACK: TechItem[] = [
  { name: 'Next.js', icon: 'SiNextdotjs' },
  { name: 'React', icon: 'SiReact' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'Node.js', icon: 'SiNodedotjs' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'PostgreSQL', icon: 'SiPostgresql' },
  { name: 'Vercel', icon: 'SiVercel' },
  { name: 'Figma', icon: 'SiFigma' },
  { name: 'Photoshop', icon: 'TbBrandAdobePhotoshop' },
  { name: 'Illustrator', icon: 'TbBrandAdobeIllustrator' },
  { name: 'Blender', icon: 'SiBlender' },
  { name: 'Git', icon: 'SiGit' },
  { name: 'GitHub', icon: 'SiGithub' },
]

export const FAQS = [
  {
    q: 'What services does Ghost Force Studio offer?',
    a: 'We offer web development, UI/UX design, branding, logo and graphic design, e-commerce, landing pages, SEO, performance optimization, maintenance, hosting, and custom web applications.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most projects run between 4 and 12 weeks depending on scope. Landing pages can ship in as little as two weeks, while full platforms and rebrands take longer.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Every project is scoped individually. We provide a detailed, transparent quote after our discovery call so you know exactly what you are investing in.',
  },
  {
    q: 'Do you work with clients worldwide?',
    a: 'Yes. We work with ambitious businesses across the globe and are set up to collaborate seamlessly across time zones.',
  },
  {
    q: 'What is your design process like?',
    a: 'We follow a proven nine-step process: discovery, research, strategy, wireframing, UI design, development, testing, launch, and ongoing support.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Absolutely. We offer maintenance, hosting, and optimization packages to keep your product fast, secure, and evolving.',
  },
  {
    q: 'Which technologies do you use?',
    a: 'We build with a modern stack including Next.js, React, TypeScript, Tailwind CSS, Node.js, and more, always choosing the right tool for the job.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. Redesigns and rebrands are among our specialties. We can elevate your existing presence or rebuild it from the ground up.',
  },
  {
    q: 'Will my website be mobile-friendly and fast?',
    a: 'Every site we build is mobile-first, fully responsive, and optimized for Core Web Vitals and excellent Lighthouse scores.',
  },
  {
    q: 'How do we get started?',
    a: 'Simply reach out through our contact page. We will schedule a discovery call to understand your goals and map out the perfect plan.',
  },
]

export const CONTACT_INFO = {
  email: 'ghostforcestudio@gmail.com',
  phone: '+381 61 2378859',
  whatsapp: 'https://wa.me/381612378859',
  address: 'Remote-first · Worldwide',
  socials: {
    instagram: 'https://www.instagram.com/ghostforcedesign',
    behance: 'https://www.behance.net/ghostforcestudio',
    github: 'https://github.com/Thats-Blazic',
    linkedin: 'https://rs.linkedin.com/in/ognjenblazic',
  },
}

export const BUDGET_OPTIONS = [
  'Under $5k',
  '$5k – $15k',
  '$15k – $30k',
  '$30k – $60k',
  '$60k+',
]

export const PROJECT_TYPES = [
  'Website',
  'Branding',
  'UI/UX Design',
  'E-commerce',
  'Landing Page',
  'Web Application',
  'Other',
]
