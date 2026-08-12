import { ArrowRight, CalendarDays, CheckCircle2, FileStack, Layers3, Target } from 'lucide-react'
import {
  getCapabilityById,
  getDirectorateBySlug,
  getProofPointById,
  getResourceById,
} from '../content'
import { MeetingSection } from '../components/MeetingSection'
import { PageHero } from '../components/PageHero'
import { ResourceCard } from '../components/ResourceCard'
import { SectionHeading } from '../components/SectionHeading'
import type { Capability, ProofPoint, Resource } from '../types'
import { RouterLink } from '../utils/router'
import { NotFoundPage } from './NotFoundPage'

export function DirectorateDetailPage({ slug }: { slug: string }) {
  const directorate = getDirectorateBySlug(slug)
  if (!directorate) return <NotFoundPage />

  const mappedCapabilities = directorate.capabilityIds
    .map(getCapabilityById)
    .filter((item): item is Capability => Boolean(item))
  const mappedResources = directorate.resourceIds
    .map(getResourceById)
    .filter((item): item is Resource => Boolean(item))
  const mappedProofPoints = directorate.proofPointIds
    .map(getProofPointById)
    .filter((item): item is ProofPoint => Boolean(item))

  return (
    <>
      <PageHero
        badge={directorate.code}
        eyebrow="Directorate field guide"
        title={directorate.name}
        description={directorate.summary}
        breadcrumbs={[
          { label: 'J/N Codes', to: '/jn' },
          { label: `${directorate.code} · ${directorate.name}` },
        ]}
        action={<RouterLink className="button button--primary" to="/meet"><CalendarDays aria-hidden="true" /> Schedule a Meeting</RouterLink>}
      />

      <section className="content-section page-width detail-section">
        <SectionHeading
          eyebrow="Relevant capabilities"
          title={`Capability framing for ${directorate.code}`}
          description="Canonical capabilities stay consistent across the guide; the framing below reflects this directorate’s mission context."
        />
        <div className="mapping-grid">
          {mappedCapabilities.map((capability) => {
            const framing = capability.directorateMappings.find((mapping) => mapping.directorateId === directorate.id)?.framing
            return (
              <article className="mapping-card" key={capability.id}>
                <div className="mapping-card__icon"><Layers3 aria-hidden="true" /></div>
                <span className="micro-label">{directorate.code} framing</span>
                <h3>{capability.name}</h3>
                {framing && <strong>{framing}</strong>}
                <p>{capability.shortDescription}</p>
                <RouterLink to={`/capabilities/${capability.slug}`}>View capability <ArrowRight aria-hidden="true" /></RouterLink>
              </article>
            )
          })}
        </div>
      </section>

      <section className="detail-band">
        <div className="page-width">
          <SectionHeading
            eyebrow="Featured use cases"
            title="Conversation starters for the mission workflow."
            description="Concise placeholders make the page useful now and easy to expand with approved details later."
          />
          <div className="use-case-grid">
            {directorate.featuredUseCases.map((useCase, index) => (
              <article className="use-case-card" key={useCase.id}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Target aria-hidden="true" />
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section page-width detail-two-column">
        <div>
          <SectionHeading eyebrow="Resources" title="Customer-facing materials" />
          <div className="resource-grid resource-grid--single-column">
            {mappedResources.map((resource) => <ResourceCard resource={resource} compact key={resource.id} />)}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Proof points" title="Evidence slots" />
          <div className="proof-list">
            {mappedProofPoints.map((proofPoint) => (
              <article key={proofPoint.id}>
                <span className="proof-list__icon"><CheckCircle2 aria-hidden="true" /></span>
                <div>
                  <span className="placeholder-badge">Content slot</span>
                  <h3>{proofPoint.title}</h3>
                  <p>{proofPoint.statement}</p>
                  <small>{proofPoint.note}</small>
                </div>
              </article>
            ))}
          </div>
          <div className="detail-note">
            <FileStack aria-hidden="true" />
            <p>Approved demos, decks, customer stories, and Highspot links will be added in the next content pass.</p>
          </div>
        </div>
      </section>

      <div className="page-width page-meeting-wrap"><MeetingSection compact /></div>
    </>
  )
}
