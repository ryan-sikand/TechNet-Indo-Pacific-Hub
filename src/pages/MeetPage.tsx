import { event } from '../content'
import { MeetingSection } from '../components/MeetingSection'
import { PageHero } from '../components/PageHero'

export function MeetPage() {
  return (
    <>
      <PageHero
        eyebrow={`${event.dateRange} | ${event.location}`}
        title="Meet with UiPath"
        description="Tell us which J/N function, mission workflow, or capability you want to explore during TechNet Indo-Pacific 2026."
      />
      <div className="page-width meet-page-section"><MeetingSection /></div>
    </>
  )
}
