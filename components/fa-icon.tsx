import type { IconType } from 'react-icons'
import {
  FaCode,
  FaPenRuler,
  FaFingerprint,
  FaShapes,
  FaPalette,
  FaCartShopping,
  FaRocket,
  FaMagnifyingGlassChart,
  FaScrewdriverWrench,
  FaServer,
  FaGaugeHigh,
  FaLayerGroup,
  FaCompass,
  FaMagnifyingGlass,
  FaChess,
  FaVial,
  FaLifeRing,
  FaGem,
  FaBolt,
  FaHandshake,
  FaLightbulb,
} from 'react-icons/fa6'

const ICONS: Record<string, IconType> = {
  code: FaCode,
  'pen-ruler': FaPenRuler,
  fingerprint: FaFingerprint,
  shapes: FaShapes,
  palette: FaPalette,
  'cart-shopping': FaCartShopping,
  rocket: FaRocket,
  'magnifying-glass-chart': FaMagnifyingGlassChart,
  'screwdriver-wrench': FaScrewdriverWrench,
  server: FaServer,
  'gauge-high': FaGaugeHigh,
  'layer-group': FaLayerGroup,
  compass: FaCompass,
  'magnifying-glass': FaMagnifyingGlass,
  chess: FaChess,
  vial: FaVial,
  'life-ring': FaLifeRing,
  gem: FaGem,
  bolt: FaBolt,
  handshake: FaHandshake,
  lightbulb: FaLightbulb,
}

export function FaIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = ICONS[name] ?? FaShapes
  return <Icon className={className} aria-hidden="true" />
}
