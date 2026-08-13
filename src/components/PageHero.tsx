import { ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { RouterLink } from '../utils/router'

type Breadcrumb = {
  label: string
  to?: string
}

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  badge?: string
  breadcrumbs?: Breadcrumb[]
  action?: ReactNode
}

export function PageHero({ eyebrow, title, description, badge, breadcrumbs, action }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="page-width page-hero__inner">
        {breadcrumbs && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            {breadcrumbs.map((item, index) => (
              <span key={`${item.label}-${index}`}>
                {item.to ? <RouterLink to={item.to}>{item.label}</RouterLink> : <span aria-current="page">{item.label}</span>}
                {index < breadcrumbs.length - 1 && <ChevronRight aria-hidden="true" />}
              </span>
            ))}
          </nav>
        )}
        <div className="page-hero__content">
          {badge && <span className="page-hero__badge">{badge}</span>}
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 tabIndex={-1}>{title}</h1>
            <p>{description}</p>
          </div>
          {action && <div className="page-hero__action">{action}</div>}
        </div>
      </div>
    </section>
  )
}
