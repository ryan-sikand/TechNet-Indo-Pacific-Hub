import { CalendarDays, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '../content'
import { RouterLink, useRoute } from '../utils/router'
import { BrandLogo } from './BrandLogo'

function isActive(path: string, href: string) {
  if (href === '/') return path === '/'
  return path === href || path.startsWith(`${href}/`)
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { path } = useRoute()

  useEffect(() => setOpen(false), [path])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <RouterLink className="site-brand" to="/" aria-label="UiPath at TechNet Indo-Pacific 2026 home">
            <BrandLogo />
            <span className="site-brand__divider" aria-hidden="true" />
            <span className="site-brand__event">TechNet Indo-Pacific <strong>2026</strong></span>
          </RouterLink>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <RouterLink
                className={isActive(path, item.href) ? 'desktop-nav__link desktop-nav__link--active' : 'desktop-nav__link'}
                to={item.href}
                key={item.href}
                aria-current={isActive(path, item.href) ? 'page' : undefined}
              >
                {item.label}
              </RouterLink>
            ))}
          </nav>

          <RouterLink className="button button--primary header-cta" to="/meet">
            <CalendarDays aria-hidden="true" /> Schedule a Meeting
          </RouterLink>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>

      {open && (
        <>
          <button className="mobile-nav-backdrop" type="button" aria-label="Close navigation" onClick={() => setOpen(false)} />
          <aside className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            <div className="mobile-nav__header">
              <BrandLogo />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close navigation"><X aria-hidden="true" /></button>
            </div>
            <p className="mobile-nav__event">UiPath at TechNet Indo-Pacific 2026</p>
            <nav>
              {navigation.map((item, index) => (
                <RouterLink
                  className={isActive(path, item.href) ? 'mobile-nav__link mobile-nav__link--active' : 'mobile-nav__link'}
                  to={item.href}
                  key={item.href}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.label}</strong>
                </RouterLink>
              ))}
            </nav>
            <RouterLink className="button button--primary button--full" to="/meet">
              <CalendarDays aria-hidden="true" /> Schedule a Meeting
            </RouterLink>
          </aside>
        </>
      )}
    </>
  )
}
