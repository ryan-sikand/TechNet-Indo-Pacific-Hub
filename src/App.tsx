import { SiteLayout } from './components/SiteLayout'
import { DirectorateDetailPage } from './pages/DirectorateDetailPage'
import { FeaturedMissionDetailPage } from './pages/FeaturedMissionDetailPage'
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
    page = <OverviewPage />
  } else if (path.startsWith('/jn/')) {
    page = <DirectorateDetailPage slug={decodeURIComponent(path.slice('/jn/'.length))} />
  } else if (path === '/maritime-operations-center') {
    page = <FeaturedMissionDetailPage slug="maritime-operations-center" />
  } else if (path.startsWith('/missions/')) {
    page = <FeaturedMissionDetailPage slug={decodeURIComponent(path.slice('/missions/'.length))} />
  } else if (path === '/capabilities' || path.startsWith('/capabilities/')) {
    page = <OverviewPage />
  } else if (path === '/resources') {
    page = <ResourcesPage />
  } else if (path === '/meet') {
    page = <MeetPage />
  } else {
    page = <NotFoundPage />
  }

  return <SiteLayout><div className="route-view" key={path}>{page}</div></SiteLayout>
}

export function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  )
}
