export type ResourceType =
  | 'Live Demo'
  | 'Demo Video'
  | 'Highspot'
  | 'Solution Brief'
  | 'One-Pager'
  | 'Customer Story'
  | 'Presentation'
  | 'Technical Architecture'
  | 'External Resource'
  | 'Event Resource'

export type ResourceFilter = 'All' | 'Demo' | 'Video' | 'Solution Brief' | 'Customer Story' | 'Presentation'

export interface EventContent {
  name: string
  siteTitle: string
  eyebrow: string
  title: string
  subtitle: string
  location: string
  dateRange: string
  eventUrl: string
  description: string
}

export interface Contact {
  id: string
  name: string
  title: string
  email: string
}

export interface FeaturedUseCase {
  id: string
  title: string
  description: string
}

export interface DetailContent {
  missionChallenge: string
  uipathCapability: string
}

export interface Directorate {
  id: string
  code: string
  name: string
  slug: string
  summary: string
  shortDescription: string
  capabilityIds: string[]
  featuredUseCases: FeaturedUseCase[]
  resourceIds: string[]
  proofPointIds: string[]
  detail: DetailContent
}

export interface DirectorateMapping {
  directorateId: string
  framing: string
}

export interface Capability {
  id: string
  name: string
  slug: string
  shortDescription: string
  description: string
  directorateMappings: DirectorateMapping[]
  resourceIds: string[]
  proofPointIds: string[]
}

export interface Resource {
  id: string
  title: string
  description: string
  type: ResourceType
  url?: string
  capabilities: string[]
  directorates: string[]
  customerFacing: boolean
  featured: boolean
  thumbnail?: string
  placeholder?: boolean
}

export interface ProofPoint {
  id: string
  title: string
  statement: string
  note: string
  capabilityIds: string[]
  directorateIds: string[]
  placeholder: boolean
}
