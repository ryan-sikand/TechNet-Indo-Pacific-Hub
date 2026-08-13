import { CalendarDays, MapPinned } from 'lucide-react'
import {
  getCapabilityBySlug,
  getDirectorateById,
  getProofPointById,
  getResourceById,
} from '../content'
import { getMeetingCtaUrl } from '../content/contacts'
import { MeetingSection } from '../components/MeetingSection'
import { PageHero } from '../components/PageHero'
import { ResourceCard } from '../components/ResourceCard'
import { SectionHeading } from '../components/SectionHeading'
import type { Directorate, ProofPoint, Resource } from '../types'
import { NotFoundPage } from './NotFoundPage'

export function CapabilityDetailPage({ slug }: { slug: string }) {
  const capability = getCapabilityBySlug(slug)
  if (!capability) return <NotFoundPage />

  const mappedResources = capability.resourceIds
    .map(getResourceById)
    .filter((item): item is Resource => Boolean(item))
    .filter((resource) => !resource.placeholder)
  const mappedProofPoints = capability.proofPointIds
    .map(getProofPointById)
    .filter((item): item is ProofPoint => Boolean(item))
    .filter((proofPoint) => !proofPoint.placeholder)

  return (
    <>
      <PageHero
        eyebrow="Reusable capability"
        title={capability.name}
        description={capability.description}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: capability.name },
        ]}
        action={<a className="button button--primary" href={getMeetingCtaUrl()} target="_blank" rel="noopener noreferrer"><CalendarDays aria-hidden="true" /> Request a Meeting</a>}
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
              <article className="capability-mapping-card" key={mapping.directorateId}>
                <span className="capability-mapping-list__code">{directorate.code}</span>
                <span className="capability-mapping-list__icon"><MapPinned aria-hidden="true" /></span>
                <span><small>{directorate.name}</small><strong>{mapping.framing}</strong></span>
              </article>
            )
          })}
        </div>
      </section>

      {(mappedResources.length > 0 || mappedProofPoints.length > 0) && (
        <section className="content-section page-width detail-two-column">
          {mappedResources.length > 0 && (
            <div>
              <SectionHeading eyebrow="Learn More" title="Shared materials" />
              <div className="resource-grid resource-grid--single-column">
                {mappedResources.map((resource) => <ResourceCard resource={resource} compact key={resource.id} />)}
              </div>
            </div>
          )}
          {mappedProofPoints.length > 0 && (
            <div>
              <SectionHeading eyebrow="Learn More" title="Supporting evidence" />
              <div className="proof-list">
                {mappedProofPoints.map((proofPoint) => (
                  <article key={proofPoint.id}>
                    <span className="proof-list__icon"><MapPinned aria-hidden="true" /></span>
                    <div>
                      <h3>{proofPoint.title}</h3>
                      <p>{proofPoint.statement}</p>
                      <small>{proofPoint.note}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      <div className="page-width page-meeting-wrap"><MeetingSection compact /></div>
    </>
  )
}
