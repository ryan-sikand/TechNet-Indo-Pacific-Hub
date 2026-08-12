import { ArrowRight, CalendarDays, ExternalLink, Layers3, MapPin, Workflow } from 'lucide-react'
import { event, featuredMissions, resources } from '../content'
import { DirectorateGrid } from '../components/DirectorateGrid'
import { Hero } from '../components/Hero'
import { MeetingSection } from '../components/MeetingSection'
import { ResourceCard } from '../components/ResourceCard'
import { SectionHeading } from '../components/SectionHeading'
import { RouterLink } from '../utils/router'

const guideSteps = [
  { number: '01', icon: Layers3, title: 'Start with the staff function', description: 'Choose the J/N area closest to the mission outcome or workflow.' },
  { number: '02', icon: Workflow, title: 'Explore the capability', description: 'See how one reusable capability is framed for that directorate.' },
  { number: '03', icon: CalendarDays, title: 'Shape the conversation', description: 'Bring the use case to UiPath for a focused session in Honolulu.' },
]

export function OverviewPage() {
  const featuredResources = resources.filter((resource) => resource.featured && !resource.placeholder).slice(0, 3)
  const maritimeOperationsCenter = featuredMissions[0]

  return (
    <>
      <Hero />

      <section className="event-ribbon" aria-label="Event summary">
        <div className="page-width event-ribbon__inner">
          <span><MapPin aria-hidden="true" /> {event.location}</span>
          <span><CalendarDays aria-hidden="true" /> {event.dateRange}</span>
          <a href={event.eventUrl} target="_blank" rel="noreferrer">Official Event Details <ExternalLink aria-hidden="true" /></a>
        </div>
      </section>

      <section className="content-section page-width">
        <RouterLink className="featured-mission" to={`/${maritimeOperationsCenter.slug}`}>
          <article>
            <div className="featured-mission__icon" aria-hidden="true">
              <img src={`${import.meta.env.BASE_URL}brand/icons/orchestrator.svg`} alt="" width="42" height="42" decoding="async" />
            </div>
            <div className="featured-mission__copy">
              <span className="eyebrow">Priority mission area</span>
              <h2>{maritimeOperationsCenter.name}</h2>
              <p>{maritimeOperationsCenter.shortDescription}</p>
            </div>
            <span className="featured-mission__action">Explore Maritime Operations Center <ArrowRight aria-hidden="true" /></span>
          </article>
        </RouterLink>
      </section>

      <section className="content-section content-section--staff-functions page-width" id="staff-functions">
        <SectionHeading
          eyebrow="Mission map"
          title="Explore by Staff Function"
          description="Choose the staff function or mission area that best matches the conversation. Each tile opens directly to its final detail page."
        />
        <DirectorateGrid />
      </section>

      <section className="guide-path">
        <div className="page-width">
          <SectionHeading
            eyebrow="How to use this guide"
            title="A short path from mission need to working session."
            description="The experience is organized for conference conversations, not a long marketing read."
          />
          <ol className="guide-path__steps">
            {guideSteps.map((step) => {
              const Icon = step.icon
              return (
                <li key={step.number}>
                  <span className="guide-step__number">{step.number}</span>
                  <Icon aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="content-section content-section--resources page-width">
        <SectionHeading
          eyebrow="Resource library"
          title="Customer-facing assets, ready to expand."
          description="A focused set of approved event and UiPath materials for follow-up conversations."
          action={<RouterLink className="text-link" to="/resources">Open the library <ArrowRight aria-hidden="true" /></RouterLink>}
        />
        <div className="resource-grid resource-grid--featured">
          {featuredResources.map((resource) => <ResourceCard resource={resource} key={resource.id} />)}
        </div>
      </section>

      <div className="page-width overview-meeting-wrap">
        <MeetingSection />
      </div>

    </>
  )
}
