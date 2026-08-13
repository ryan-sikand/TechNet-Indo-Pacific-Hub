import { ArrowLeft, CalendarDays } from 'lucide-react'
import { DirectorateGrid } from '../components/DirectorateGrid'
import { PageHero } from '../components/PageHero'
import { getMeetingCtaUrl } from '../content/contacts'
import { RouterLink } from '../utils/router'

export function JNPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff-function map"
        title="Explore by Staff Function"
        description="Choose a staff function or mission area. Each tile opens directly to its final mission detail page."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Explore by Staff Function' }]}
        action={<a className="button button--primary" href={getMeetingCtaUrl()} target="_blank" rel="noopener noreferrer"><CalendarDays aria-hidden="true" /> Request a Meeting</a>}
      />
      <section className="content-section page-width">
        <RouterLink className="text-link staff-functions__back" to="/"><ArrowLeft aria-hidden="true" /> Back to Home</RouterLink>
        <DirectorateGrid />
      </section>
    </>
  )
}
