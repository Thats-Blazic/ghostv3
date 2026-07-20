export type PortfolioType = 'website' | 'banner' | 'thumbnail'

export type PortfolioItem = {
  slug: string
  title: string
  image: string
  type: PortfolioType
  liveUrl?: string
  imagePosition?: string
}

export const PORTFOLIO_CATEGORIES = ['All', 'Websites', 'Banners', 'Thumbnails'] as const

const THUB = '/testimonials/thub'

const THUB_FILES = [
  '1.jpg',
  '2.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  'a.jpg',
  'aaaaaa.jpg',
  'b6626d215597007-676f408e42ec5.jpg',
  'badem.jpg',
  'brutal.jpg',
  'dentis.jpg',
  'dnilo.jpg',
  'enduro.jpg',
  'face.jpg',
  'gastro.jpg',
  'GHOST.jpg',
  'isho.jpg',
  'ivan-marketing-tajne.jpg',
  'ivann.jpg',
  'js1.png',
  'js2.png',
  'kad.jpg',
  'kristinaa.jpg',
  'krtoni.jpg',
  'lav.jpg',
  'motod.jpg',
  'mtt.jpg',
  'pacho.jpg',
  'peki.jpg',
  'pera.jpg',
  'perou.jpg',
  'portfolio0.jpg',
  'portfolio13.jpg',
  'portfolio14.png',
  'portfolio15.png',
  'portfolio16.png',
  'portfolio20.jpg',
  'portfolio7.jpg',
  'portfolio8.jpg',
  'portfolio9.jpg',
  'projekt-menadzer.jpg',
  'shop.png',
  'smergut.jpg',
  'st-moto.jpg',
  'st.jpg',
  'stba.jpg',
  'th1.jpg',
  'th2.jpg',
  'th3.jpg',
  'thumb-novi.jpg',
  'Thumbnail 19.jpg',
  'Thumbnail 4.jpg',
  'vartalaap revision 1.jpg',
] as const

const BANNER_FILES = new Set([
  'GHOST.jpg',
  'isho.jpg',
  'badem.jpg',
  'perou.jpg',
  'st.jpg',
  'st-moto.jpg',
  'kad.jpg',
  'lav.jpg',
  'stba.jpg',
])

function slugify(value: string) {
  return value
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function titleFromFile(value: string) {
  return value
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

const WEBSITES = '/projects/websites'

export const WEBSITE_PROJECTS: PortfolioItem[] = [
  {
    slug: 'hair-max-studio',
    title: 'Hair Max Studio',
    image: `${WEBSITES}/hair-max-studio.png`,
    type: 'website',
    liveUrl: 'https://www.hairmaxstudio.com/',
  },
  {
    slug: 'grand-kopaonik',
    title: 'Hotel Grand Kopaonik',
    image: `${WEBSITES}/grand-kopaonik.png`,
    type: 'website',
    liveUrl: 'https://www.grandkopaonik.com/',
  },
  {
    slug: 'merit-starlit-hotel',
    title: 'Merit Starlit Hotel',
    image: `${WEBSITES}/merit-starlit-hotel.png`,
    type: 'website',
    liveUrl: 'https://www.meritstarlithotel.com/',
  },
]

const EXTRA_BANNERS: PortfolioItem[] = [
  {
    slug: 'ghost-force-og',
    title: 'Ghost Force OG',
    image: '/og-image.png',
    type: 'banner',
    imagePosition: 'center',
  },
]

const thubItems: PortfolioItem[] = THUB_FILES.map((file) => ({
  slug: slugify(file),
  title: titleFromFile(file),
  image: `${THUB}/${file}`,
  type: BANNER_FILES.has(file) ? 'banner' : 'thumbnail',
}))

export const PORTFOLIO: PortfolioItem[] = [
  ...WEBSITE_PROJECTS,
  ...EXTRA_BANNERS,
  ...thubItems,
]

/** @deprecated Use WEBSITE_PROJECTS — kept for footer links */
export const PROJECTS = WEBSITE_PROJECTS
