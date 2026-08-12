import type { ProofPoint } from '../types'

export const proofPoints: ProofPoint[] = [
  {
    id: 'workflow-proof-slot',
    title: 'Workflow orchestration proof point',
    statement: 'Reserved for an approved customer-facing example of coordinated work across people, agents, and automations.',
    note: 'Populate during the content-ingestion pass.',
    capabilityIds: ['agentic-onboarding', 'moc-agentic-orchestrator'],
    directorateIds: ['j1-n1', 'j3-n3', 'j4-n4'],
    placeholder: true,
  },
  {
    id: 'trusted-data-proof-slot',
    title: 'Trusted data proof point',
    statement: 'Reserved for an approved customer-facing entity-resolution story or demonstration outcome.',
    note: 'No customer metric or reference is asserted in this skeleton.',
    capabilityIds: ['entity-resolution'],
    directorateIds: ['j2-n2', 'j3-n3', 'j4-n4', 'j6-n6'],
    placeholder: true,
  },
  {
    id: 'review-proof-slot',
    title: 'Human review proof point',
    statement: 'Reserved for an approved example showing review, accountability, and structured follow-up.',
    note: 'Populate during the content-ingestion pass.',
    capabilityIds: ['aar-agent'],
    directorateIds: ['j3-n3', 'j7-n7', 'j9'],
    placeholder: true,
  },
  {
    id: 'test-proof-slot',
    title: 'Testing proof point',
    statement: 'Reserved for approved evidence on regression, patch, or release validation.',
    note: 'Populate during the content-ingestion pass.',
    capabilityIds: ['test-cloud'],
    directorateIds: ['j6-n6'],
    placeholder: true,
  },
  {
    id: 'audit-proof-slot',
    title: 'Audit readiness proof point',
    statement: 'Reserved for an approved example of evidence collection, reconciliation, or traceability.',
    note: 'Populate during the content-ingestion pass.',
    capabilityIds: ['financial-management-audit'],
    directorateIds: ['j8-n8'],
    placeholder: true,
  },
]
