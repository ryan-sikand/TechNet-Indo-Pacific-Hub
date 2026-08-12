import { capabilities } from './capabilities'
import { directorates } from './directorates'
import { proofPoints } from './proofPoints'
import { resources } from './resources'

export { capabilities } from './capabilities'
export { contacts, getContactCtaUrl, meetingEmail } from './contacts'
export { directorates } from './directorates'
export { event } from './event'
export { navigation } from './navigation'
export { proofPoints } from './proofPoints'
export { resourceFilters, resourceMatchesFilter, resources } from './resources'

export const getDirectorateBySlug = (slug: string) => directorates.find((item) => item.slug === slug)
export const getDirectorateById = (id: string) => directorates.find((item) => item.id === id)
export const getCapabilityById = (id: string) => capabilities.find((item) => item.id === id)
export const getCapabilityBySlug = (slug: string) => capabilities.find((item) => item.slug === slug)
export const getResourceById = (id: string) => resources.find((item) => item.id === id)
export const getProofPointById = (id: string) => proofPoints.find((item) => item.id === id)
