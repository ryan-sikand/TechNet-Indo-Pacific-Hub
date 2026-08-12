import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { resourceFilters, resourceMatchesFilter, resources } from '../content'
import { PageHero } from '../components/PageHero'
import { ResourceCard } from '../components/ResourceCard'
import type { ResourceFilter } from '../types'

export function ResourcesPage() {
  const [filter, setFilter] = useState<ResourceFilter>('All')
  const filteredResources = useMemo(
    () => resources.filter((resource) => resource.customerFacing && !resource.placeholder && resourceMatchesFilter(resource, filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        eyebrow="Customer-facing library"
        title="Resources"
        description="Approved event and UiPath materials for customer follow-up. Additional assets appear here only after their links and content are verified."
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
            <h2>No approved {filter.toLowerCase()} resources are available yet.</h2>
            <p>Verified customer-facing materials will be added here as they are approved.</p>
            <button type="button" onClick={() => setFilter('All')}>Show all resources</button>
          </div>
        )}
      </section>
    </>
  )
}
