import { ArrowRight, ArrowUpRight, CalendarDays, ExternalLink, Layers3, MapPin, Workflow } from 'lucide-react'
import { capabilities, event, resources } from '../content'
import { CapabilityCard } from '../components/CapabilityCard'
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
  const featuredResources = resources.filter((resource) => resource.featured).slice(0, 3)

  return (
    <>
      <Hero />

      <section className="event-ribbon" aria-label="Event summary">
        <div className="page-width event-ribbon__inner">
          <span><MapPin aria-hidden="true" /> {event.location}</span>
          <span><CalendarDays aria-hidden="true" /> {event.dateRange}</span>
          <a href={event.eventUrl} target="_blank" rel="noreferrer">Official event page <ExternalLink aria-hidden="true" /></a>
        </div>
      </section>

      <section className="content-section page-width">
        <SectionHeading
          eyebrow="Mission map"
          title="Explore by J/N staff function."
          description="Each view connects a staff mission to reusable UiPath capabilities, concise use-case framing, and customer-facing resource slots."
          action={<RouterLink className="text-link" to="/jn">View all J/N codes <ArrowRight aria-hidden="true" /></RouterLink>}
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

      <section className="content-section page-width">
        <SectionHeading
          eyebrow="Canonical capability model"
          title="One capability. Mission-specific framing."
          description="Capabilities are defined once and mapped to the staff functions where their framing changes."
          action={<RouterLink className="text-link" to="/capabilities">Capability map <ArrowRight aria-hidden="true" /></RouterLink>}
        />
        <div className="capability-grid">
          {capabilities.map((capability) => <CapabilityCard capability={capability} compact key={capability.id} />)}
        </div>
      </section>

      <section className="content-section content-section--resources page-width">
        <SectionHeading
          eyebrow="Resource library"
          title="Customer-facing assets, ready to expand."
          description="This first pass contains a small public-safe set plus clearly labeled slots for demos, videos, briefs, stories, and decks."
          action={<RouterLink className="text-link" to="/resources">Open the library <ArrowRight aria-hidden="true" /></RouterLink>}
        />
        <div className="resource-grid resource-grid--featured">
          {featuredResources.map((resource) => <ResourceCard resource={resource} key={resource.id} />)}
        </div>
      </section>

      <div className="page-width overview-meeting-wrap">
        <MeetingSection />
      </div>

      <section className="closing-banner page-width">
        <div>
          <span className="eyebrow">October 26–29 · Honolulu</span>
          <h2>Bring a mission workflow. Leave with a clearer automation path.</h2>
        </div>
        <RouterLink className="button button--primary button--large" to="/meet">Schedule a Meeting <ArrowUpRight aria-hidden="true" /></RouterLink>
      </section>
    </>
  )
}
