import { getFeaturedMissionBySlug } from '../content'
import { MissionDetail } from '../components/MissionDetail'
import { NotFoundPage } from './NotFoundPage'

export function FeaturedMissionDetailPage({ slug }: { slug: string }) {
  const mission = getFeaturedMissionBySlug(slug)
  if (!mission) return <NotFoundPage />

  return (
    <MissionDetail
      code={mission.code}
      name={mission.name}
      summary={mission.summary}
      detail={mission.detail}
      capabilityIds={mission.capabilityIds}
      featuredUseCases={mission.featuredUseCases}
      resourceIds={mission.resourceIds}
      proofPointIds={mission.proofPointIds}
      breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: mission.name },
      ]}
    />
  )
}
