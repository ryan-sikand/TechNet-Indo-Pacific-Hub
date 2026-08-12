import type { Directorate } from '../types'

export const directorates: Directorate[] = [
  {
    id: 'j1-n1',
    code: 'J1 / N1',
    name: 'Manpower & Personnel',
    slug: 'j1-n1',
    shortDescription: 'Modernize the workforce journey from onboarding through downstream scheduling.',
    summary:
      'Streamline employee onboarding, validation, approvals, and downstream scheduling with people, agents, automation, and orchestration.',
    capabilityIds: ['agentic-onboarding'],
    featuredUseCases: [
      { id: 'onboarding-intake', title: 'Onboarding intake', description: 'Coordinate forms, validation, approvals, and case status.' },
      { id: 'personnel-scheduling', title: 'Personnel scheduling', description: 'Connect approved onboarding actions to downstream scheduling.' },
    ],
    resourceIds: ['agentic-onboarding-demo'],
    proofPointIds: ['workflow-proof-slot'],
  },
  {
    id: 'j2-n2',
    code: 'J2 / N2',
    name: 'Intelligence',
    slug: 'j2-n2',
    shortDescription: 'Create trusted entity context across fragmented source data.',
    summary:
      'Reconcile fragmented source data into trusted entity records and accelerate analyst review.',
    capabilityIds: ['entity-resolution'],
    featuredUseCases: [
      { id: 'identity-resolution', title: 'Identity resolution', description: 'Compare records while preserving source evidence and uncertainty.' },
      { id: 'analyst-review', title: 'Analyst review', description: 'Route ambiguous matches into a clear human decision point.' },
    ],
    resourceIds: ['entity-resolution-video'],
    proofPointIds: ['trusted-data-proof-slot'],
  },
  {
    id: 'j3-n3',
    code: 'J3 / N3',
    name: 'Operations',
    slug: 'j3-n3',
    shortDescription: 'Fuse operational context and orchestrate mission workflows.',
    summary:
      'Fuse operational data, increase confidence in the common operating picture, orchestrate mission workflows, and reduce reporting burden.',
    capabilityIds: ['entity-resolution', 'moc-agentic-orchestrator', 'aar-agent'],
    featuredUseCases: [
      { id: 'cop-fusion', title: 'COP fusion', description: 'Reconcile operational records into a trusted working view.' },
      { id: 'mission-workflows', title: 'Mission workflow coordination', description: 'Track handoffs across agents, people, automations, and systems.' },
      { id: 'operational-aar', title: 'Operational AAR', description: 'Structure event observations, decisions, and follow-up actions.' },
    ],
    resourceIds: ['entity-resolution-video', 'orchestration-briefing-deck', 'aar-demo-placeholder'],
    proofPointIds: ['workflow-proof-slot', 'review-proof-slot'],
  },
  {
    id: 'j4-n4',
    code: 'J4 / N4',
    name: 'Logistics',
    slug: 'j4-n4',
    shortDescription: 'Build trusted supplier context and coordinate sustainment workflows.',
    summary:
      'Create trusted supplier and resource records while orchestrating sustainment and logistics workflows.',
    capabilityIds: ['entity-resolution', 'moc-agentic-orchestrator'],
    featuredUseCases: [
      { id: 'supplier-360', title: 'Supplier / partner 360', description: 'Reconcile supplier records and surface conflicting source data.' },
      { id: 'sustainment-workflow', title: 'Sustainment workflow', description: 'Coordinate exceptions, reviews, approvals, and follow-up actions.' },
    ],
    resourceIds: ['entity-resolution-video', 'orchestration-briefing-deck'],
    proofPointIds: ['trusted-data-proof-slot', 'workflow-proof-slot'],
  },
  {
    id: 'j6-n6',
    code: 'J6 / N6',
    name: 'C5 / Cyber',
    slug: 'j6-n6',
    shortDescription: 'Strengthen change validation and asset or identity context.',
    summary:
      'Accelerate regression and patch validation while improving asset and identity context for cyber operations.',
    capabilityIds: ['test-cloud', 'entity-resolution'],
    featuredUseCases: [
      { id: 'patch-validation', title: 'Patch validation', description: 'Organize repeatable test coverage and release evidence.' },
      { id: 'asset-identity', title: 'Asset / identity 360', description: 'Reconcile records across systems into reviewable context.' },
    ],
    resourceIds: ['test-cloud-overview', 'entity-resolution-video'],
    proofPointIds: ['test-proof-slot', 'trusted-data-proof-slot'],
  },
  {
    id: 'j7-n7',
    code: 'J7 / N7',
    name: 'Training & Exercises',
    slug: 'j7-n7',
    shortDescription: 'Capture observations and accelerate structured lessons learned.',
    summary:
      'Capture hotwash inputs, exercise observations, lessons learned, and structured after-action reporting.',
    capabilityIds: ['aar-agent'],
    featuredUseCases: [
      { id: 'hotwash-capture', title: 'Hotwash capture', description: 'Gather observations from distributed participants.' },
      { id: 'lessons-learned', title: 'Lessons learned', description: 'Organize themes, actions, owners, and review-ready outputs.' },
    ],
    resourceIds: ['aar-demo-placeholder'],
    proofPointIds: ['review-proof-slot'],
  },
  {
    id: 'j8-n8',
    code: 'J8 / N8',
    name: 'Requirements & Resources',
    slug: 'j8-n8',
    shortDescription: 'Support audit evidence, reconciliation, and resource traceability.',
    summary:
      'Automate audit evidence, financial workflow support, reconciliation, process evidence, and traceability.',
    capabilityIds: ['financial-management-audit'],
    featuredUseCases: [
      { id: 'audit-evidence', title: 'Audit evidence', description: 'Collect and organize evidence with a visible process trail.' },
      { id: 'financial-reconciliation', title: 'Financial reconciliation', description: 'Coordinate data comparison, exceptions, and review.' },
    ],
    resourceIds: ['financial-audit-one-pager'],
    proofPointIds: ['audit-proof-slot'],
  },
  {
    id: 'j9',
    code: 'J9',
    name: 'Pacific Outreach',
    slug: 'j9',
    shortDescription: 'Turn engagements into structured readouts and follow-up packages.',
    summary:
      'Turn engagements and KLEs into structured readouts, action items, read-aheads, and follow-up packages.',
    capabilityIds: ['aar-agent'],
    featuredUseCases: [
      { id: 'kle-readout', title: 'KLE readout', description: 'Structure notes, themes, commitments, and follow-up actions.' },
      { id: 'engagement-read-ahead', title: 'Engagement read-ahead', description: 'Prepare concise context and open actions for the next touchpoint.' },
    ],
    resourceIds: ['aar-demo-placeholder'],
    proofPointIds: ['review-proof-slot'],
  },
]
