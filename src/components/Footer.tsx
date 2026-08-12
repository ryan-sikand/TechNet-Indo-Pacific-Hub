import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'
import { event } from '../content'
import { RouterLink } from '../utils/router'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main page-width">
        <div className="site-footer__brand">
          <BrandLogo variant="footer" />
          <p>UiPath at TechNet Indo-Pacific 2026</p>
          <span>Agentic automation and orchestration across the J/N staff.</span>
        </div>
        <div className="site-footer__event">
          <span className="micro-label">Event</span>
          <div><CalendarDays aria-hidden="true" /> {event.dateRange}</div>
          <div><MapPin aria-hidden="true" /> {event.location}</div>
        </div>
        <div className="site-footer__links">
          <span className="micro-label">Connect</span>
          <RouterLink to="/meet">Meet with UiPath <ArrowUpRight aria-hidden="true" /></RouterLink>
          <a href={event.eventUrl} target="_blank" rel="noreferrer">Official event page <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="site-footer__legal page-width">
        <span>© 2005–2026 UiPath. All rights reserved.</span>
        <span>Customer-facing event field guide</span>
      </div>
    </footer>
  )
}
