import { SiteLayout } from './components/SiteLayout'
import { CapabilitiesPage } from './pages/CapabilitiesPage'
import { CapabilityDetailPage } from './pages/CapabilityDetailPage'
import { DirectorateDetailPage } from './pages/DirectorateDetailPage'
import { JNPage } from './pages/JNPage'
import { MeetPage } from './pages/MeetPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { OverviewPage } from './pages/OverviewPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { RouterProvider, useRoute } from './utils/router'

export function AppRoutes() {
  const { path } = useRoute()

  let page
  if (path === '/' || path === '/overview') {
    page = <OverviewPage />
  } else if (path === '/jn') {
    page = <JNPage />
  } else if (path.startsWith('/jn/')) {
    page = <DirectorateDetailPage slug={decodeURIComponent(path.slice('/jn/'.length))} />
  } else if (path === '/capabilities') {
    page = <CapabilitiesPage />
  } else if (path.startsWith('/capabilities/')) {
    page = <CapabilityDetailPage slug={decodeURIComponent(path.slice('/capabilities/'.length))} />
  } else if (path === '/resources') {
    page = <ResourcesPage />
  } else if (path === '/meet') {
    page = <MeetPage />
  } else {
    page = <NotFoundPage />
  }

  return <SiteLayout>{page}</SiteLayout>
}

export function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  )
}
