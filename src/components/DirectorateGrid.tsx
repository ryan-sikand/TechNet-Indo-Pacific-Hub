import { directorates } from '../content'
import { DirectorateCard } from './DirectorateCard'

export function DirectorateGrid({ limit }: { limit?: number }) {
  const items = typeof limit === 'number' ? directorates.slice(0, limit) : directorates

  return (
    <div className="directorate-grid">
      {items.map((directorate) => <DirectorateCard directorate={directorate} key={directorate.id} />)}
    </div>
  )
}
