import { ArrowRight, CalendarDays, Compass, MapPin } from 'lucide-react'
import { event } from '../content'
import { getMeetingCtaUrl } from '../content/contacts'

export function Hero() {
  const scrollToStaffFunctions = () => {
    document.getElementById('staff-functions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__pixels" aria-hidden="true">
        <span className="hero__pixel hero__pixel--one" />
        <span className="hero__pixel hero__pixel--two" />
        <span className="hero__pixel hero__pixel--three" />
        <span className="hero__pixel hero__pixel--four" />
        <span className="hero__pixel hero__pixel--five" />
        <span className="hero__pixel hero__pixel--six" />
      </div>
      <div className="hero__inner page-width">
        <div className="hero__copy">
          <div className="hero__cobrand" aria-label="UiPath at TechNet Indo-Pacific 2026">
            <span className="hero__partner-mark">
              <img
                src={`${import.meta.env.BASE_URL}brand/technet-indo-pacific-2026.png`}
                alt="TechNet Indo-Pacific, October 26-29, 2026"
                width="260"
                height="116"
              />
            </span>
            <span className="hero__cobrand-divider" aria-hidden="true" />
            <span className="hero__uipath-mark">
              <img
                src={`${import.meta.env.BASE_URL}brand/uipath-wordmark.svg`}
                alt="UiPath"
                width="98"
                height="32"
              />
            </span>
          </div>
          <div className="hero__eyebrow"><Compass aria-hidden="true" /> {event.eyebrow}</div>
          <h1 id="hero-title">UiPath at <em>TechNet Indo-Pacific 2026</em></h1>
          <p>{event.subtitle}</p>
          <div className="hero__details" aria-label="Event details">
            <span><MapPin aria-hidden="true" /> {event.location}</span>
            <span><CalendarDays aria-hidden="true" /> {event.dateRange}</span>
            <span className="hero__booth">Booth details to follow</span>
          </div>
          <div className="hero__actions">
            <button className="button button--primary button--large" type="button" onClick={scrollToStaffFunctions}>
              Explore Staff Functions <ArrowRight aria-hidden="true" />
            </button>
            <a className="button button--dark-ghost button--large" href={getMeetingCtaUrl()} target="_blank" rel="noopener noreferrer">
              Request a Meeting
            </a>
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
          <button className="field-card__link" type="button" onClick={scrollToStaffFunctions}>
            Explore the staff function map <ArrowRight aria-hidden="true" />
          </button>
        </aside>
      </div>
    </section>
  )
}
