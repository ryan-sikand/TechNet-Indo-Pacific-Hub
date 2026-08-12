import { ArrowUpRight, FileText, LockKeyhole } from 'lucide-react'
import { getCapabilityById, getDirectorateById } from '../content'
import type { Resource } from '../types'

export function ResourceCard({ resource, compact = false }: { resource: Resource; compact?: boolean }) {
  const directorateCodes = resource.directorates
    .map((id) => getDirectorateById(id)?.code)
    .filter(Boolean)
  const capabilityNames = resource.capabilities
    .map((id) => getCapabilityById(id)?.name)
    .filter(Boolean)

  return (
    <article className={`resource-card${compact ? ' resource-card--compact' : ''}`}>
      <div className="resource-card__header">
        <span className="resource-card__icon"><FileText aria-hidden="true" /></span>
        <span className="resource-type">{resource.type}</span>
        {resource.placeholder && <span className="placeholder-badge">Placeholder</span>}
      </div>
      <h3 title={resource.title}>{resource.title}</h3>
      <p>{resource.description}</p>
      {(directorateCodes.length > 0 || capabilityNames.length > 0) && (
        <div className="resource-card__tags">
          {directorateCodes.map((code) => <span key={code}>{code}</span>)}
          {capabilityNames.slice(0, 1).map((name) => <span key={name}>{name}</span>)}
        </div>
      )}
      {resource.url ? (
        <a href={resource.url} target="_blank" rel="noreferrer" aria-label={`Open ${resource.title}`}>
          Open resource <ArrowUpRight aria-hidden="true" />
        </a>
      ) : (
        <span className="resource-card__pending"><LockKeyhole aria-hidden="true" /> Link added in content pass</span>
      )}
    </article>
  )
}
