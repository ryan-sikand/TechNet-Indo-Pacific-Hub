import { ArrowLeft } from 'lucide-react'
import { RouterLink } from '../utils/router'

export function NotFoundPage() {
  return (
    <section className="not-found page-width">
      <span className="eyebrow">404 · Field guide</span>
      <h1>That view is not in the guide.</h1>
      <p>Return to the overview or browse the J/N use-case map.</p>
      <div>
        <RouterLink className="button button--primary" to="/"><ArrowLeft aria-hidden="true" /> Back to overview</RouterLink>
        <RouterLink className="button button--secondary" to="/jn">Browse J/N codes</RouterLink>
      </div>
    </section>
  )
}
