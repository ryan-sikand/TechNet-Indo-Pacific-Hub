import { CalendarDays } from 'lucide-react'
import { DirectorateGrid } from '../components/DirectorateGrid'
import { MeetingSection } from '../components/MeetingSection'
import { PageHero } from '../components/PageHero'
import { RouterLink } from '../utils/router'

export function JNPage() {
  return (
    <>
      <PageHero
        eyebrow="PACOM / PACFLT staff functions"
        title="J/N use-case map"
        description="Choose a directorate to explore mission-oriented capability framing, use-case placeholders, resources, and proof-point slots."
        action={<RouterLink className="button button--primary" to="/meet"><CalendarDays aria-hidden="true" /> Schedule a Meeting</RouterLink>}
      />
      <section className="content-section page-width">
        <DirectorateGrid />
      </section>
      <div className="page-width page-meeting-wrap"><MeetingSection compact /></div>
    </>
  )
}
