import type { Resource, ResourceFilter, ResourceType } from '../types'

export const resources: Resource[] = [
  {
    id: 'event-page',
    title: 'AFCEA TechNet Indo-Pacific 2026 event page',
    description: 'Official event information, dates, and attendee details.',
    type: 'Event Resource',
    url: 'https://events.afcea.org/TIP26/Public/enter.aspx',
    capabilities: [],
    directorates: [],
    customerFacing: true,
    featured: true,
  },
  {
    id: 'agentic-onboarding-demo',
    title: 'Agentic Onboarding demo',
    description: 'Placeholder for the approved customer-facing onboarding demonstration.',
    type: 'Live Demo',
    capabilities: ['agentic-onboarding'],
    directorates: ['j1-n1'],
    customerFacing: true,
    featured: true,
    placeholder: true,
  },
  {
    id: 'entity-resolution-video',
    title: 'Entity Resolution demo video',
    description: 'Placeholder for a short customer-facing walkthrough of evidence-backed entity resolution.',
    type: 'Demo Video',
    capabilities: ['entity-resolution'],
    directorates: ['j2-n2', 'j3-n3', 'j4-n4', 'j6-n6'],
    customerFacing: true,
    featured: true,
    placeholder: true,
  },
  {
    id: 'aar-demo-placeholder',
    title: 'AAR Agent demonstration',
    description: 'Placeholder for an approved after-action reporting demo and supporting materials.',
    type: 'Live Demo',
    capabilities: ['aar-agent'],
    directorates: ['j3-n3', 'j7-n7', 'j9'],
    customerFacing: true,
    featured: false,
    placeholder: true,
  },
  {
    id: 'test-cloud-overview',
    title: 'UiPath Test Cloud overview',
    description: 'Public UiPath overview of agentic testing capabilities and Test Cloud.',
    type: 'External Resource',
    url: 'https://www.uipath.com/product/test-cloud',
    capabilities: ['test-cloud'],
    directorates: ['j6-n6'],
    customerFacing: true,
    featured: true,
  },
  {
    id: 'financial-audit-one-pager',
    title: 'Financial management & audit one-pager',
    description: 'Placeholder for the approved public-sector financial workflow overview.',
    type: 'One-Pager',
    capabilities: ['financial-management-audit'],
    directorates: ['j8-n8'],
    customerFacing: true,
    featured: false,
    placeholder: true,
  },
  {
    id: 'orchestration-briefing-deck',
    title: 'Mission orchestration briefing deck',
    description: 'Placeholder for a customer-facing overview of cross-functional orchestration.',
    type: 'Presentation',
    capabilities: ['moc-agentic-orchestrator'],
    directorates: ['j3-n3', 'j4-n4'],
    customerFacing: true,
    featured: false,
    placeholder: true,
  },
]

export const resourceFilters: ResourceFilter[] = [
  'All',
  'Demo',
  'Video',
  'Solution Brief',
  'Customer Story',
  'Presentation',
]

const filterTypes: Record<Exclude<ResourceFilter, 'All'>, ResourceType[]> = {
  Demo: ['Live Demo'],
  Video: ['Demo Video'],
  'Solution Brief': ['Solution Brief', 'One-Pager'],
  'Customer Story': ['Customer Story'],
  Presentation: ['Presentation'],
}

export function resourceMatchesFilter(resource: Resource, filter: ResourceFilter) {
  return filter === 'All' || filterTypes[filter].includes(resource.type)
}
