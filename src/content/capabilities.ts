import type { Capability } from '../types'

export const capabilities: Capability[] = [
  {
    id: 'agentic-onboarding',
    name: 'Agentic Onboarding',
    slug: 'agentic-onboarding',
    shortDescription: 'Coordinate onboarding intake, validation, approvals, and scheduling.',
    description:
      'Bring people, agents, automation, and orchestration into one onboarding flow with clear handoffs and review points.',
    directorateMappings: [
      { directorateId: 'j1-n1', framing: 'Hire to Retire' },
    ],
    resourceIds: ['agentic-onboarding-demo'],
    proofPointIds: ['workflow-proof-slot'],
  },
  {
    id: 'entity-resolution',
    name: 'Entity Resolution',
    slug: 'entity-resolution',
    shortDescription: 'Reconcile fragmented source data into trusted, reviewable entity records.',
    description:
      'Unify records from multiple systems, preserve source evidence, and route uncertain matches for analyst review.',
    directorateMappings: [
      { directorateId: 'j2-n2', framing: 'Targeting / Intelligence' },
      { directorateId: 'j3-n3', framing: 'COP Fusion' },
      { directorateId: 'j4-n4', framing: 'Supplier / Partner 360' },
      { directorateId: 'j6-n6', framing: 'Asset / Identity 360' },
    ],
    resourceIds: ['entity-resolution-video'],
    proofPointIds: ['trusted-data-proof-slot'],
  },
  {
    id: 'moc-agentic-orchestrator',
    name: 'MOC Agentic Orchestrator',
    slug: 'moc-agentic-orchestrator',
    shortDescription: 'Coordinate mission workflows across agents, automations, people, and systems.',
    description:
      'Model the mission workflow, maintain shared process context, and make handoffs and exceptions visible.',
    directorateMappings: [
      { directorateId: 'j3-n3', framing: 'Mission workflow orchestration' },
      { directorateId: 'j4-n4', framing: 'Sustainment workflow orchestration' },
    ],
    resourceIds: ['orchestration-briefing-deck'],
    proofPointIds: ['workflow-proof-slot'],
  },
  {
    id: 'aar-agent',
    name: 'AAR Agent',
    slug: 'aar-agent',
    shortDescription: 'Turn observations and debrief inputs into structured after-action outputs.',
    description:
      'Collect distributed inputs, identify actions and themes, and prepare a consistent review-ready AAR package.',
    directorateMappings: [
      { directorateId: 'j3-n3', framing: 'Operational events' },
      { directorateId: 'j7-n7', framing: 'Exercises and lessons learned' },
      { directorateId: 'j9', framing: 'Engagement debriefs and KLE readouts' },
    ],
    resourceIds: ['aar-demo-placeholder'],
    proofPointIds: ['review-proof-slot'],
  },
  {
    id: 'security-operations',
    name: 'Security Operations Orchestration',
    slug: 'security-operations',
    shortDescription: 'Coordinate repeatable patch validation and release evidence while bringing asset and identity records together for review.',
    description:
      'Use governed testing and trusted asset or identity context to support reviewable Security Operations workflows.',
    directorateMappings: [
      { directorateId: 'j6-n6', framing: 'Security Operations / SOC' },
    ],
    resourceIds: [],
    proofPointIds: [],
  },
  {
    id: 'test-cloud',
    name: 'Test Cloud',
    slug: 'test-cloud',
    shortDescription: 'Support regression, patch, and release validation with governed testing.',
    description:
      'Organize test coverage and validation evidence for software changes that support mission operations.',
    directorateMappings: [
      { directorateId: 'j6-n6', framing: 'Regression and patch validation' },
    ],
    resourceIds: ['test-cloud-overview'],
    proofPointIds: ['test-proof-slot'],
  },
  {
    id: 'financial-management-audit',
    name: 'Financial Management & Audit',
    slug: 'financial-management-audit',
    shortDescription: 'Automate evidence, reconciliation, traceability, and financial workflow support.',
    description:
      'Reduce manual evidence gathering and create clearer traceability across financial management and audit workflows.',
    directorateMappings: [
      { directorateId: 'j8-n8', framing: 'Requirements, resources, and audit readiness' },
    ],
    resourceIds: ['financial-audit-one-pager'],
    proofPointIds: ['audit-proof-slot'],
  },
]
