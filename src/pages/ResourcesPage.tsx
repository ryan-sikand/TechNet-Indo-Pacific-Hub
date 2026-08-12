import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { resourceFilters, resourceMatchesFilter, resources } from '../content'
import { PageHero } from '../components/PageHero'
import { ResourceCard } from '../components/ResourceCard'
import type { ResourceFilter } from '../types'

export function ResourcesPage() {
  const [filter, setFilter] = useState<ResourceFilter>('All')
  const filteredResources = useMemo(
    () => resources.filter((resource) => resource.customerFacing && resourceMatchesFilter(resource, filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        eyebrow="Customer-facing library"
        title="Resources"
        description="A public-safe shell for demos, videos, solution briefs, customer stories, presentations, and event materials."
      />
      <section className="content-section page-width">
        <div className="resource-toolbar">
          <div>
            <span className="micro-label">Filter library</span>
            <p>{filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}</p>
          </div>
          <div className="filter-list" role="group" aria-label="Filter resources">
            {resourceFilters.map((item) => (
              <button
                className={filter === item ? 'filter-button filter-button--active' : 'filter-button'}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {filteredResources.length > 0 ? (
          <div className="resource-grid">
            {filteredResources.map((resource) => <ResourceCard resource={resource} key={resource.id} />)}
          </div>
        ) : (
          <div className="empty-state">
            <Search aria-hidden="true" />
            <h2>No {filter.toLowerCase()} assets in the skeleton yet.</h2>
            <p>This category is ready for the next customer-facing content-ingestion pass.</p>
            <button type="button" onClick={() => setFilter('All')}>Show all resources</button>
          </div>
        )}
      </section>
    </>
  )
}
