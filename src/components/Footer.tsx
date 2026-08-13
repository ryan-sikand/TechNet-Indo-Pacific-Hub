import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
import { event } from '../content'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main page-width">
        <div className="site-footer__brand">
          <BrandLogo variant="footer" />
          <p>UiPath at TechNet Indo-Pacific 2026</p>
          <span>Agentic automation and orchestration for mission outcomes.</span>
        </div>
        <div className="site-footer__event">
          <span className="micro-label">Event</span>
          <div><CalendarDays aria-hidden="true" /> {event.dateRange}</div>
          <div><MapPin aria-hidden="true" /> {event.location}</div>
        </div>
        <div className="site-footer__links">
          <span className="micro-label">Event link</span>
          <a href={event.eventUrl} target="_blank" rel="noreferrer">Official Event Details <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="site-footer__legal page-width">
        <span>&copy; 2005&ndash;2026 UiPath. All rights reserved.</span>
        <span>Customer-facing event field guide</span>
      </div>
    </footer>
  )
}
