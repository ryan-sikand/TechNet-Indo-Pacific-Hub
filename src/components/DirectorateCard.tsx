import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  PackageCheck,
  RadioTower,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import type { Directorate } from '../types'
import { RouterLink } from '../utils/router'

const directorateIcons: Record<string, LucideIcon> = {
  'j1-n1': BriefcaseBusiness,
  'j2-n2': BrainCircuit,
  'j3-n3': RadioTower,
  'j4-n4': PackageCheck,
  'j6-n6': ShieldCheck,
  'j7-n7': GraduationCap,
  'j8-n8': Boxes,
  j9: Handshake,
}

export function DirectorateCard({ directorate }: { directorate: Directorate }) {
  const Icon = directorateIcons[directorate.id]

  return (
    <RouterLink className="directorate-card" to={`/jn/${directorate.slug}`} aria-label={`View ${directorate.code} ${directorate.name} use cases`}>
      <article>
        <div className="directorate-card__top">
          <span className="directorate-card__code">{directorate.code}</span>
          <span className="directorate-card__icon"><Icon aria-hidden="true" /></span>
        </div>
        <h3 title={directorate.name}>{directorate.name}</h3>
        <p>{directorate.shortDescription}</p>
        <span className="directorate-card__action">View Use Cases <ArrowRight aria-hidden="true" /></span>
      </article>
    </RouterLink>
  )
}
