import { ArrowUpRight, Mail } from 'lucide-react'
import { contacts, event } from '../content'
import { getMeetingCtaUrl } from '../content/contacts'

export function MeetingSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`meeting-section${compact ? ' meeting-section--compact' : ''}`} aria-labelledby="meeting-section-title">
      <div className="meeting-section__copy">
        <span className="eyebrow">Meet with UiPath</span>
        <h2 id="meeting-section-title">Continue the conversation in Honolulu.</h2>
        <p>
          Choose a date and time in the calendar invitation, then share the staff function or mission workflow you want to explore.
        </p>
        <div className="meeting-section__event">
          <img src={`${import.meta.env.BASE_URL}brand/icons/calendar.svg`} alt="" width="24" height="24" decoding="async" aria-hidden="true" />
          <span><strong>{event.dateRange}</strong>{event.location}</span>
        </div>
        <a
          className="button button--primary button--full meeting-section__cta"
          href={getMeetingCtaUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Request a Meeting <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="contact-grid">
        {contacts.map((contact) => (
          <article className="contact-card" key={contact.id}>
            <div className="contact-card__avatar" aria-hidden="true">
              {contact.name.split(' ').map((part) => part[0]).join('')}
            </div>
            <div className="contact-card__body">
              <span className="micro-label">UiPath | Public Sector</span>
              <h3>{contact.name}</h3>
              <p>{contact.title}</p>
              <span
                className="contact-card__email"
              >
                <Mail aria-hidden="true" /> {contact.email}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
