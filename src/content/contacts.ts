import type { Contact } from '../types'

export const meetingEmail = {
  subject: 'TechNet Indo-Pacific 2026 | UiPath Meeting Request',
  body: `Hello UiPath team,

I'd like to meet with the UiPath team during TechNet Indo-Pacific 2026.

Name:
Organization:
Staff function or mission workflow:
Preferred day/time:
Additional attendees or notes:

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

export function getMeetingCtaUrl() {
  const recipients = contacts.map((contact) => contact.email).join(',')
  return `mailto:${recipients}?subject=${encodeURIComponent(meetingEmail.subject)}&body=${encodeURIComponent(meetingEmail.body)}`
}
