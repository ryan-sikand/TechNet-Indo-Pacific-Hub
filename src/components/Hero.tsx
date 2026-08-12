import { ArrowRight, CalendarDays, Compass, MapPin } from 'lucide-react'
import { event } from '../content'
import { RouterLink } from '../utils/router'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="hero__inner page-width">
        <div className="hero__copy">
          <div className="hero__eyebrow"><Compass aria-hidden="true" /> {event.eyebrow}</div>
          <h1 id="hero-title">UiPath at <em>TechNet Indo-Pacific 2026</em></h1>
          <p>{event.subtitle}</p>
          <div className="hero__details" aria-label="Event details">
            <span><MapPin aria-hidden="true" /> {event.location}</span>
            <span><CalendarDays aria-hidden="true" /> {event.dateRange}</span>
          </div>
          <div className="hero__actions">
            <RouterLink className="button button--primary button--large" to="/jn">
              Explore J/N Use Cases <ArrowRight aria-hidden="true" />
            </RouterLink>
            <RouterLink className="button button--dark-ghost button--large" to="/meet">
              Schedule a Meeting
            </RouterLink>
          </div>
        </div>

        <aside className="hero__field-card" aria-label="Field guide overview">
          <div className="field-card__topline">
            <span>Digital field guide</span>
            <strong>TIP 26</strong>
          </div>
          <div className="field-card__focus">
            <span className="micro-label">Mission focus</span>
            <strong>J/N staff outcomes</strong>
            <p>Start with the staff function. Explore the capability. Continue the conversation in Honolulu.</p>
          </div>
          <div className="field-card__stats">
            <div><strong>08</strong><span>J/N views</span></div>
            <div><strong>06</strong><span>Capabilities</span></div>
            <div><strong>01</strong><span>Shared model</span></div>
          </div>
          <RouterLink to="/capabilities">Browse the capability map <ArrowRight aria-hidden="true" /></RouterLink>
        </aside>
      </div>
    </section>
  )
}
