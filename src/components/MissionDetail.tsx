import { ArrowLeft, CheckCircle2, Layers3, Target } from 'lucide-react'
import { getCapabilityById, getProofPointById, getResourceById } from '../content'
import type { Capability, DetailContent, FeaturedUseCase, ProofPoint, Resource } from '../types'
import { MeetingSection } from './MeetingSection'
import { PageHero } from './PageHero'
import { ResourceCard } from './ResourceCard'
import { SectionHeading } from './SectionHeading'
import { RouterLink } from '../utils/router'

type Breadcrumb = {
  label: string
  to?: string
}

type MissionDetailProps = {
  code: string
  name: string
  summary: string
  detail: DetailContent
  capabilityIds: string[]
  featuredUseCases: FeaturedUseCase[]
  resourceIds: string[]
  proofPointIds: string[]
  breadcrumbs: Breadcrumb[]
  directorateId?: string
}

export function MissionDetail({
  code,
  name,
  summary,
  detail,
  capabilityIds,
  featuredUseCases,
  resourceIds,
  proofPointIds,
  breadcrumbs,
  directorateId,
}: MissionDetailProps) {
  const mappedCapabilities = capabilityIds
    .map(getCapabilityById)
    .filter((item): item is Capability => Boolean(item))
  const mappedResources = resourceIds
    .map(getResourceById)
    .filter((item): item is Resource => Boolean(item))
    .filter((resource) => !resource.placeholder)
  const mappedProofPoints = proofPointIds
    .map(getProofPointById)
    .filter((item): item is ProofPoint => Boolean(item))
    .filter((proofPoint) => !proofPoint.placeholder)
  const realDemos = mappedResources.filter(
    (resource) => Boolean(resource.url) && (resource.type === 'Live Demo' || resource.type === 'Demo Video'),
  )
  const learnMoreResources = mappedResources.filter((resource) => resource.type !== 'Live Demo' && resource.type !== 'Demo Video')

  return (
    <>
      {directorateId && (
        <nav className="detail-return-bar" aria-label="Staff function navigation">
          <div className="page-width detail-return-bar__inner">
            <RouterLink className="detail-return-bar__link" to="/#staff-functions" replace>
              <ArrowLeft aria-hidden="true" />
              <span>Back to staff functions</span>
            </RouterLink>
          </div>
        </nav>
      )}

      <PageHero
        badge={code}
        eyebrow="Mission field guide"
        title={name}
        description={summary}
        breadcrumbs={breadcrumbs}
      />

      <section className="content-section page-width detail-section detail-overview" aria-label={`${name} overview`}>
        <article className="detail-overview__item">
          <span className="eyebrow">Mission Challenge</span>
          <h2>What the mission team is working through.</h2>
          <p>{detail.missionChallenge}</p>
        </article>
      </section>

      <section className="content-section page-width detail-section detail-capabilities">
        <SectionHeading
          eyebrow="UiPath Capability"
          title="Reusable capabilities for this mission."
          description={detail.uipathCapability}
        />
        <div className="mapping-grid">
          {mappedCapabilities.map((capability) => {
            const framing = directorateId
              ? capability.directorateMappings.find((mapping) => mapping.directorateId === directorateId)?.framing
              : undefined
            return (
              <article className="mapping-card" key={capability.id}>
                <div className="mapping-card__icon"><Layers3 aria-hidden="true" /></div>
                <span className="micro-label">{code} framing</span>
                <h3>{capability.name}</h3>
                {framing && <strong>{framing}</strong>}
                <p>{capability.shortDescription}</p>
              </article>
            )
          })}
        </div>
      </section>

      {featuredUseCases.length > 0 && (
        <section className="detail-band" aria-labelledby="relevant-use-cases-heading">
          <div className="page-width">
            <SectionHeading
              eyebrow="Relevant Use Case"
              title="Concrete ways to start the conversation."
              titleId="relevant-use-cases-heading"
              description="Use-case framing is kept concise and grounded in the mission workflow."
            />
            <div className={`use-case-grid use-case-grid--${Math.min(featuredUseCases.length, 3)}`}>
              {featuredUseCases.map((useCase, index) => (
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
      )}

      {realDemos.length > 0 && (
        <section className="content-section page-width detail-section">
          <SectionHeading eyebrow="Demo" title="See the workflow in action." />
          <div className="resource-grid">
            {realDemos.map((resource) => <ResourceCard resource={resource} compact key={resource.id} />)}
          </div>
        </section>
      )}

      {(learnMoreResources.length > 0 || mappedProofPoints.length > 0) && (
        <section className="content-section page-width detail-two-column detail-learn-more">
          {learnMoreResources.length > 0 && (
            <div>
              <SectionHeading eyebrow="Learn More" title="Supporting information" />
              <div className="resource-grid resource-grid--single-column">
                {learnMoreResources.map((resource) => <ResourceCard resource={resource} compact key={resource.id} />)}
              </div>
            </div>
          )}
          {mappedProofPoints.length > 0 && (
            <div>
              <SectionHeading eyebrow="Learn More" title="Supporting evidence" />
              <div className="proof-list">
                {mappedProofPoints.map((proofPoint) => (
                  <article key={proofPoint.id}>
                    <span className="proof-list__icon"><CheckCircle2 aria-hidden="true" /></span>
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
