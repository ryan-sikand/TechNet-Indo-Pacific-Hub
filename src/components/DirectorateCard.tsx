import { ArrowRight } from 'lucide-react'
import type { Directorate } from '../types'
import { RouterLink } from '../utils/router'

const directorateIcons: Record<string, string> = {
  'j1-n1': `${import.meta.env.BASE_URL}brand/icons/staff-personnel.svg`,
  'j2-n2': `${import.meta.env.BASE_URL}brand/icons/staff-intelligence.svg`,
  'j3-n3': `${import.meta.env.BASE_URL}brand/icons/orchestrator.svg`,
  'j4-n4': `${import.meta.env.BASE_URL}brand/icons/staff-logistics.svg`,
  'j6-n6': `${import.meta.env.BASE_URL}brand/icons/staff-cyber.svg`,
  'j7-n7': `${import.meta.env.BASE_URL}brand/icons/staff-training.svg`,
  'j8-n8': `${import.meta.env.BASE_URL}brand/icons/staff-resources.svg`,
  j9: `${import.meta.env.BASE_URL}brand/icons/staff-outreach.svg`,
}

export function DirectorateCard({ directorate }: { directorate: Directorate }) {
  const icon = directorateIcons[directorate.id]

  return (
    <RouterLink className="directorate-card" to={`/jn/${directorate.slug}`} aria-label={`Explore ${directorate.code} ${directorate.name}`}>
      <article>
        <div className="directorate-card__top">
          <span className="directorate-card__code">{directorate.code}</span>
          <span className="directorate-card__icon" aria-hidden="true">
            <img src={icon} alt="" width="32" height="32" decoding="async" />
          </span>
        </div>
        <h3 title={directorate.name}>{directorate.name}</h3>
        <p>{directorate.shortDescription}</p>
        <span className="directorate-card__action">Explore Staff Function <ArrowRight aria-hidden="true" /></span>
      </article>
    </RouterLink>
  )
}
