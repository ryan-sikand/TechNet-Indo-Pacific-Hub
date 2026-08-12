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
    detail: {
      missionChallenge: 'Personnel actions move across forms, validation steps, approvals, and scheduling systems, making status and handoffs difficult to track.',
      uipathCapability: 'UiPath can coordinate intake, validation, approvals, and downstream scheduling in one governed workflow with clear human review points.',
    },
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
    detail: {
      missionChallenge: 'Analysts must reconcile fragmented records while preserving source evidence, ambiguity, and the need for accountable review.',
      uipathCapability: 'UiPath can unify records from multiple systems, retain source context, and route uncertain matches to analysts for a clear decision.',
    },
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
    detail: {
      missionChallenge: 'Operational teams need trusted context and visible coordination across data sources, mission workflows, handoffs, and reporting cycles.',
      uipathCapability: 'UiPath can connect operational records, orchestrate work across agents, automations, people, and systems, and keep exceptions visible.',
    },
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
    detail: {
      missionChallenge: 'Sustainment teams work across fragmented supplier, resource, exception, approval, and follow-up processes.',
      uipathCapability: 'UiPath can reconcile supplier context and coordinate sustainment workflows with visible reviews, approvals, exceptions, and next actions.',
    },
  },
  {
    id: 'j6-n6',
    code: 'J6 / N6',
    name: 'Communications, IT & Cyber',
    slug: 'j6-n6',
    shortDescription: 'Strengthen Security Operations, change validation, and asset or identity context.',
    summary:
      'Accelerate regression and patch validation while improving asset and identity context for cyber operations.',
    capabilityIds: ['security-operations', 'test-cloud', 'entity-resolution'],
    featuredUseCases: [
      { id: 'security-operations-soc', title: 'Security Operations / SOC', description: 'Coordinate repeatable patch validation and release evidence while bringing asset and identity records together for review.' },
      { id: 'patch-validation', title: 'Patch validation', description: 'Organize repeatable test coverage and release evidence.' },
      { id: 'asset-identity', title: 'Asset / identity 360', description: 'Reconcile records across systems into reviewable context.' },
    ],
    resourceIds: ['test-cloud-overview', 'entity-resolution-video'],
    proofPointIds: ['test-proof-slot', 'trusted-data-proof-slot'],
    detail: {
      missionChallenge: 'Security operations must validate patches and releases while maintaining trusted, reviewable asset and identity context across systems.',
      uipathCapability: 'UiPath Test Cloud organizes repeatable test coverage and validation evidence. Entity Resolution reconciles asset and identity records across systems and routes ambiguous matches to a clear human review point.',
    },
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
    detail: {
      missionChallenge: 'Exercise observations arrive from distributed participants and must be turned into consistent, review-ready lessons and actions.',
      uipathCapability: 'UiPath can collect inputs, organize themes, identify actions and owners, and prepare a structured after-action package for review.',
    },
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
    detail: {
      missionChallenge: 'Evidence collection, reconciliation, and traceability depend on repeatable work across financial and resource-management systems.',
      uipathCapability: 'UiPath can automate evidence gathering, coordinate exceptions and review, and maintain a visible process trail for audit readiness.',
    },
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
    detail: {
      missionChallenge: 'Engagement notes, commitments, and open actions must become concise readouts and useful context for the next touchpoint.',
      uipathCapability: 'UiPath can structure distributed inputs into themes, actions, owners, read-aheads, and consistent follow-up packages.',
    },
  },
]
