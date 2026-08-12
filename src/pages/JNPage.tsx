import { ArrowLeft, CalendarDays } from 'lucide-react'
import { DirectorateGrid } from '../components/DirectorateGrid'
import { PageHero } from '../components/PageHero'
import { RouterLink } from '../utils/router'

export function JNPage() {
  return (
    <>
      <PageHero
        eyebrow="PACOM / PACFLT staff functions"
        title="Explore by Staff Function"
        description="Choose a staff function or mission area. Each tile opens directly to its final mission detail page."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Explore by Staff Function' }]}
        action={<RouterLink className="button button--primary" to="/meet"><CalendarDays aria-hidden="true" /> Request a Meeting</RouterLink>}
      />
      <section className="content-section page-width">
        <RouterLink className="text-link staff-functions__back" to="/"><ArrowLeft aria-hidden="true" /> Back to Home</RouterLink>
        <DirectorateGrid />
      </section>
    </>
  )
}
