import { ArrowRight, Workflow } from 'lucide-react'
import { getDirectorateById } from '../content'
import type { Capability } from '../types'
import { RouterLink } from '../utils/router'

export function CapabilityCard({ capability, compact = false }: { capability: Capability; compact?: boolean }) {
  const codes = capability.directorateMappings
    .map((mapping) => getDirectorateById(mapping.directorateId)?.code)
    .filter(Boolean)

  return (
    <RouterLink className={`capability-card${compact ? ' capability-card--compact' : ''}`} to={`/capabilities/${capability.slug}`}>
      <article>
        <div className="capability-card__icon"><Workflow aria-hidden="true" /></div>
        <span className="micro-label">Reusable capability</span>
        <h3 title={capability.name}>{capability.name}</h3>
        <p>{capability.shortDescription}</p>
        <div className="capability-card__codes" aria-label="Associated directorates">
          {codes.map((code) => <span key={code}>{code}</span>)}
        </div>
        <span className="capability-card__action">View Capability <ArrowRight aria-hidden="true" /></span>
      </article>
    </RouterLink>
  )
}
