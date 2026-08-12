import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'

type RouterContextValue = {
  path: string
  hrefFor: (to: string) => string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterContextValue | null>(null)
const highspotMode = import.meta.env.MODE === 'highspot'

function normalizePath(path: string) {
  const clean = path.split('?')[0].split('#')[0]
  if (!clean || clean === '/') return '/'
  return `/${clean.replace(/^\/+|\/+$/g, '')}`
}

function getHostedBase() {
  if (!window.location.hostname.endsWith('.uipath.host')) return ''
  const firstSegment = window.location.pathname.split('/').filter(Boolean)[0]
  return firstSegment ? `/${firstSegment}` : ''
}

function readPath() {
  if (highspotMode) return normalizePath(window.location.hash.slice(1) || '/')

  const base = getHostedBase()
  const path = base && window.location.pathname.startsWith(base)
    ? window.location.pathname.slice(base.length)
    : window.location.pathname

  return normalizePath(path)
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readPath)

  useEffect(() => {
    const eventName = highspotMode ? 'hashchange' : 'popstate'
    const syncPath = () => setPath(readPath())
    window.addEventListener(eventName, syncPath)
    return () => window.removeEventListener(eventName, syncPath)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [path])

  const hrefFor = useCallback((to: string) => {
    const target = normalizePath(to)
    if (highspotMode) return `#${target}`
    return `${getHostedBase()}${target === '/' ? '/' : target}`
  }, [])

  const navigate = useCallback((to: string) => {
    const target = normalizePath(to)
    if (target === readPath()) return

    if (highspotMode) {
      window.location.hash = target
    } else {
      window.history.pushState({}, '', hrefFor(target))
      setPath(target)
    }
  }, [hrefFor])

  const value = useMemo(() => ({ path, hrefFor, navigate }), [hrefFor, navigate, path])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRoute() {
  const context = useContext(RouterContext)
  if (!context) throw new Error('useRoute must be used within RouterProvider')
  return context
}

type RouterLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string
}

export function RouterLink({ to, onClick, ...props }: RouterLinkProps) {
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
    navigate(to)
  }

  return <a href={hrefFor(to)} onClick={handleClick} {...props} />
}
