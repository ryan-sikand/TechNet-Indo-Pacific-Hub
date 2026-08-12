import { ArrowRight, CalendarDays, MapPinned } from 'lucide-react'
import {
  getCapabilityBySlug,
  getDirectorateById,
  getProofPointById,
  getResourceById,
} from '../content'
import { MeetingSection } from '../components/MeetingSection'
import { PageHero } from '../components/PageHero'
import { ResourceCard } from '../components/ResourceCard'
import { SectionHeading } from '../components/SectionHeading'
import type { Directorate, ProofPoint, Resource } from '../types'
import { RouterLink } from '../utils/router'
import { NotFoundPage } from './NotFoundPage'

export function CapabilityDetailPage({ slug }: { slug: string }) {
  const capability = getCapabilityBySlug(slug)
  if (!capability) return <NotFoundPage />

  const mappedResources = capability.resourceIds
    .map(getResourceById)
    .filter((item): item is Resource => Boolean(item))
  const mappedProofPoints = capability.proofPointIds
    .map(getProofPointById)
    .filter((item): item is ProofPoint => Boolean(item))

  return (
    <>
      <PageHero
        eyebrow="Reusable capability"
        title={capability.name}
        description={capability.description}
        breadcrumbs={[
          { label: 'Capabilities', to: '/capabilities' },
          { label: capability.name },
        ]}
        action={<RouterLink className="button button--primary" to="/meet"><CalendarDays aria-hidden="true" /> Schedule a Meeting</RouterLink>}
      />

      <section className="content-section page-width">
        <SectionHeading
          eyebrow="Directorate mappings"
          title="Mission-specific framing"
          description="The capability remains canonical while the mission language changes for each staff function."
        />
        <div className="capability-mapping-list">
          {capability.directorateMappings.map((mapping) => {
            const directorate = getDirectorateById(mapping.directorateId) as Directorate | undefined
            if (!directorate) return null
            return (
              <RouterLink to={`/jn/${directorate.slug}`} key={mapping.directorateId}>
                <span className="capability-mapping-list__code">{directorate.code}</span>
                <span className="capability-mapping-list__icon"><MapPinned aria-hidden="true" /></span>
                <span><small>{directorate.name}</small><strong>{mapping.framing}</strong></span>
                <ArrowRight aria-hidden="true" />
              </RouterLink>
            )
          })}
        </div>
      </section>

      <section className="content-section page-width detail-two-column">
        <div>
          <SectionHeading eyebrow="Resources" title="Shared materials" />
          <div className="resource-grid resource-grid--single-column">
            {mappedResources.map((resource) => <ResourceCard resource={resource} compact key={resource.id} />)}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Proof point architecture" title="Approved evidence goes here" />
          <div className="proof-list">
            {mappedProofPoints.map((proofPoint) => (
              <article key={proofPoint.id}>
                <span className="proof-list__icon"><MapPinned aria-hidden="true" /></span>
                <div>
                  <span className="placeholder-badge">Content slot</span>
                  <h3>{proofPoint.title}</h3>
                  <p>{proofPoint.statement}</p>
                  <small>{proofPoint.note}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="page-width page-meeting-wrap"><MeetingSection compact /></div>
    </>
  )
}
