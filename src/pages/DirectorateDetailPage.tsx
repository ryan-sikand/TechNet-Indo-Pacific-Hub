import { getDirectorateBySlug } from '../content'
import { MissionDetail } from '../components/MissionDetail'
import { NotFoundPage } from './NotFoundPage'

export function DirectorateDetailPage({ slug }: { slug: string }) {
  const directorate = getDirectorateBySlug(slug)
  if (!directorate) return <NotFoundPage />

  return (
    <MissionDetail
      code={directorate.code}
      name={directorate.name}
      summary={directorate.summary}
      detail={directorate.detail}
      capabilityIds={directorate.capabilityIds}
      featuredUseCases={directorate.featuredUseCases}
      resourceIds={directorate.resourceIds}
      proofPointIds={directorate.proofPointIds}
      directorateId={directorate.id}
      breadcrumbs={[
        { label: 'Home', to: '/' },
        { label: `${directorate.code} - ${directorate.name}` },
      ]}
    />
  )
}
