import type { Contact } from '../types'

export const meetingInvite = {
  subject: 'TechNet Indo-Pacific 2026 | UiPath Meeting',
  location: 'TechNet Indo-Pacific 2026 | Honolulu, Hawaii',
  body: `Requested through the TechNet Indo-Pacific 2026 digital field guide.

Please choose a date and time during October 26–29, 2026 before sending this invitation.

Organization:
Staff function or mission workflow:
Discussion topic:
Additional attendees or notes:`,
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
  const query = [
    ['path', '/calendar/action/compose'],
    ['rru', 'addevent'],
    ['subject', meetingInvite.subject],
    ['body', meetingInvite.body],
    ['location', meetingInvite.location],
    ['to', contacts.map((contact) => contact.email).join(',')],
  ]
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')

  return `https://outlook.office.com/calendar/deeplink/compose?${query}`
}
