import type { DetailContent, FeaturedUseCase } from '../types'

export interface FeaturedMission {
  id: string
  slug: string
  code: string
  name: string
  shortDescription: string
  summary: string
  detail: DetailContent
  capabilityIds: string[]
  featuredUseCases: FeaturedUseCase[]
  resourceIds: string[]
  proofPointIds: string[]
}

export const featuredMissions: FeaturedMission[] = [
  {
    id: 'maritime-operations-center',
    slug: 'maritime-operations-center',
    code: 'Featured mission',
    name: 'Maritime Operations Center',
    shortDescription: 'Connect operational awareness, readiness, logistics, data integration, and mission orchestration in one visible workflow.',
    summary:
      'Support maritime operations with trusted operational context and coordinated workflows across readiness, logistics, reporting, people, agents, automations, and systems.',
    detail: {
      missionChallenge: 'Maritime operations rely on timely operational awareness, readiness, logistics, and reporting across fragmented data sources and cross-functional handoffs.',
      uipathCapability: 'UiPath can reconcile operational context and orchestrate mission workflows across people, agents, automations, and systems while keeping exceptions and human decisions visible.',
    },
    capabilityIds: ['moc-agentic-orchestrator', 'entity-resolution'],
    featuredUseCases: [
      {
        id: 'maritime-operational-awareness',
        title: 'Operational awareness',
        description: 'Reconcile operational records into a trusted working view for review and action.',
      },
      {
        id: 'maritime-readiness-logistics',
        title: 'Readiness and logistics coordination',
        description: 'Coordinate handoffs, exceptions, approvals, and follow-up across readiness and sustainment workflows.',
      },
      {
        id: 'maritime-mission-orchestration',
        title: 'Mission orchestration',
        description: 'Maintain shared workflow context across teams, systems, automations, and agents.',
      },
    ],
    resourceIds: [],
    proofPointIds: [],
  },
]

export const getFeaturedMissionBySlug = (slug: string) => featuredMissions.find((item) => item.slug === slug)
