import { CalendarDays } from 'lucide-react'
import { capabilities } from '../content'
import { CapabilityCard } from '../components/CapabilityCard'
import { MeetingSection } from '../components/MeetingSection'
import { PageHero } from '../components/PageHero'
import { RouterLink } from '../utils/router'

export function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Shared capability model"
        title="Capabilities"
        description="Reusable UiPath capability concepts with directorate-specific framing and shared customer-facing resources."
        action={<RouterLink className="button button--primary" to="/meet"><CalendarDays aria-hidden="true" /> Request a Meeting</RouterLink>}
      />
      <section className="content-section page-width">
        <div className="capability-grid capability-grid--page">
          {capabilities.map((capability) => <CapabilityCard capability={capability} key={capability.id} />)}
        </div>
      </section>
      <div className="page-width page-meeting-wrap"><MeetingSection compact /></div>
    </>
  )
}
