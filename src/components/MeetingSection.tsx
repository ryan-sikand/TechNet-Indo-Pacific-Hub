import { ArrowUpRight, CalendarDays, Mail } from 'lucide-react'
import { contacts, event, getContactCtaUrl } from '../content'

export function MeetingSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`meeting-section${compact ? ' meeting-section--compact' : ''}`} aria-labelledby="meeting-section-title">
      <div className="meeting-section__copy">
        <span className="eyebrow">Meet with UiPath</span>
        <h2 id="meeting-section-title">Continue the conversation in Honolulu.</h2>
        <p>
          Share the J/N staff function or mission workflow you want to explore. We’ll use your note to prepare a focused conversation.
        </p>
        <div className="meeting-section__event">
          <CalendarDays aria-hidden="true" />
          <span><strong>{event.dateRange}</strong>{event.location}</span>
        </div>
      </div>
      <div className="contact-grid">
        {contacts.map((contact) => (
          <article className="contact-card" key={contact.id}>
            <div className="contact-card__avatar" aria-hidden="true">
              {contact.name.split(' ').map((part) => part[0]).join('')}
            </div>
            <div className="contact-card__body">
              <span className="micro-label">UiPath · Public Sector</span>
              <h3>{contact.name}</h3>
              <p>{contact.title}</p>
              <a
                className="contact-card__email"
                href={`mailto:${contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail aria-hidden="true" /> {contact.email}
              </a>
            </div>
            <a
              className="button button--primary button--full"
              href={getContactCtaUrl(contact)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.bookingUrl ? 'Book time' : 'Request a meeting'} <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
