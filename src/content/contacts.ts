import type { Contact } from '../types'

export const meetingEmail = {
  subject: 'TechNet Indo-Pacific 2026 | Meeting Request',
  body: `Hello,

I'd like to schedule time with UiPath during TechNet Indo-Pacific 2026.

Name:
Organization:
Area / J-N Code:
Use case of interest:
Preferred date/time:

Thank you.`,
}

export const contacts: Contact[] = [
  {
    id: 'alex-berzins',
    name: 'Alex Berzins',
    title: 'Public Sector Sales Executive - DoD',
    email: 'alex.berzins@uipath.com',
  },
  {
    id: 'matthew-jacobs',
    name: 'Matthew Jacobs',
    title: 'Public Sector Sales Executive - DoD',
    email: 'matt.jacobs@uipath.com',
  },
]

export function getContactCtaUrl(contact: Contact) {
  if (contact.bookingUrl) return contact.bookingUrl

  const params = new URLSearchParams({
    subject: meetingEmail.subject,
    body: meetingEmail.body,
  })

  return `mailto:${contact.email}?${params.toString()}`
}
