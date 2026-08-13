import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'

type RouterContextValue = {
  path: string
  hrefFor: (to: string) => string
  navigate: (to: string, options?: NavigateOptions) => void
}

type RouteLocation = {
  path: string
  section: string | null
}

type NavigateOptions = {
  replace?: boolean
}

const RouterContext = createContext<RouterContextValue | null>(null)
const highspotMode = import.meta.env.MODE === 'highspot'

function normalizePath(path: string) {
  const clean = path.split('?')[0].split('#')[0]
  if (!clean || clean === '/') return '/'
  return `/${clean.replace(/^\/+|\/+$/g, '')}`
}

function decodeUrlPart(value: string) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

function normalizeSection(section?: string | null) {
  const clean = decodeUrlPart(section ?? '').replace(/^#+/, '').trim()
  return clean || null
}

function parseDestination(to: string): RouteLocation {
  const hashIndex = to.indexOf('#')
  const rawPath = hashIndex >= 0 ? to.slice(0, hashIndex) : to
  const rawSection = hashIndex >= 0 ? to.slice(hashIndex + 1) : null

  return {
    path: normalizePath(rawPath),
    section: normalizeSection(rawSection),
  }
}

function getHostedBase() {
  if (!window.location.hostname.endsWith('.uipath.host')) return ''
  const firstSegment = window.location.pathname.split('/').filter(Boolean)[0]
  return firstSegment ? `/${firstSegment}` : ''
}

function readLocation(): RouteLocation {
  if (highspotMode) {
    const hashRoute = window.location.hash.slice(1) || '/'
    const queryIndex = hashRoute.indexOf('?')
    const rawPath = queryIndex >= 0 ? hashRoute.slice(0, queryIndex) : hashRoute
    const search = queryIndex >= 0 ? hashRoute.slice(queryIndex + 1) : ''

    return {
      path: normalizePath(rawPath),
      section: normalizeSection(new URLSearchParams(search).get('section')),
    }
  }

  const base = getHostedBase()
  const path = base && window.location.pathname.startsWith(base)
    ? window.location.pathname.slice(base.length)
    : window.location.pathname

  return {
    path: normalizePath(path),
    section: normalizeSection(window.location.hash.slice(1)),
  }
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState(readLocation)
  const initialRoute = useRef(true)

  useEffect(() => {
    const eventNames = highspotMode ? ['hashchange'] : ['popstate', 'hashchange']
    const syncRoute = () => setRoute(readLocation())
    eventNames.forEach((eventName) => window.addEventListener(eventName, syncRoute))
    return () => eventNames.forEach((eventName) => window.removeEventListener(eventName, syncRoute))
  }, [])

  useLayoutEffect(() => {
    const sectionTarget = route.section ? document.getElementById(route.section) : null

    if (sectionTarget) {
      sectionTarget.scrollIntoView({ behavior: 'instant', block: 'start' })
      if (!initialRoute.current) sectionTarget.focus({ preventScroll: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      if (!initialRoute.current) {
        document.querySelector<HTMLElement>('.route-view h1')?.focus({ preventScroll: true })
      }
    }

    initialRoute.current = false
  }, [route.path, route.section])

  const hrefFor = useCallback((to: string) => {
    const target = parseDestination(to)
    const encodedSection = target.section ? encodeURIComponent(target.section) : ''

    if (highspotMode) {
      return `#${target.path}${encodedSection ? `?section=${encodedSection}` : ''}`
    }

    const pathname = `${getHostedBase()}${target.path === '/' ? '/' : target.path}`
    return `${pathname}${encodedSection ? `#${encodedSection}` : ''}`
  }, [])

  const navigate = useCallback((to: string, options: NavigateOptions = {}) => {
    const target = parseDestination(to)
    const current = readLocation()
    if (target.path === current.path && target.section === current.section) return

    const href = hrefFor(to)

    if (highspotMode) {
      if (options.replace) {
        window.history.replaceState({}, '', href)
      } else {
        window.location.hash = href.slice(1)
      }
    } else {
      window.history[options.replace ? 'replaceState' : 'pushState']({}, '', href)
    }

    setRoute(target)
  }, [hrefFor])

  const value = useMemo(() => ({ path: route.path, hrefFor, navigate }), [hrefFor, navigate, route.path])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRoute() {
  const context = useContext(RouterContext)
  if (!context) throw new Error('useRoute must be used within RouterProvider')
  return context
}

type RouterLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string
  replace?: boolean
}

export function RouterLink({ to, replace = false, onClick, ...props }: RouterLinkProps) {
  const { hrefFor, navigate } = useRoute()

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (
      event.defaultPrevented
      || event.button !== 0
      || event.metaKey
      || event.ctrlKey
      || event.shiftKey
      || event.altKey
      || props.target === '_blank'
    ) return

    event.preventDefault()
    navigate(to, { replace })
  }

  return <a href={hrefFor(to)} onClick={handleClick} {...props} />
}
