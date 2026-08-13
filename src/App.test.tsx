import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { App } from './App'
import { contacts, directorates } from './content'
import { getMeetingCtaUrl } from './content/contacts'

const expectedStaffFunctions = [
  { code: 'J1 / N1', name: 'Manpower & Personnel', slug: 'j1-n1' },
  { code: 'J2 / N2', name: 'Intelligence', slug: 'j2-n2' },
  { code: 'J3 / N3', name: 'Operations', slug: 'j3-n3' },
  { code: 'J4 / N4', name: 'Logistics', slug: 'j4-n4' },
  { code: 'J6 / N6', name: 'Communications, IT & Cyber', slug: 'j6-n6' },
  { code: 'J7 / N7', name: 'Training & Exercises', slug: 'j7-n7' },
  { code: 'J8 / N8', name: 'Requirements & Resources', slug: 'j8-n8' },
  { code: 'J9', name: 'Pacific Outreach', slug: 'j9' },
]

describe('UiPath at TechNet Indo-Pacific 2026', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/')
  })

  it('renders the public field guide skeleton and all eight staff-function tiles', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'UiPath at TechNet Indo-Pacific 2026' })).toBeInTheDocument()
    const staffSection = document.getElementById('staff-functions')
    expect(staffSection).not.toBeNull()
    const staffMap = within(staffSection!)
    expect(staffMap.getByRole('heading', { name: 'Explore by Staff Function' })).toBeInTheDocument()
    expect(staffMap.getByText('Explore PACOM and PACFLT staff functions and mission areas that best match the conversation.')).toBeInTheDocument()
    expect(directorates).toHaveLength(expectedStaffFunctions.length)
    expectedStaffFunctions.forEach(({ code, name, slug }) => {
      expect(staffMap.getByRole('link', { name: `Explore ${code} ${name}` })).toHaveAttribute('href', `/jn/${slug}`)
    })
    const fieldGuide = screen.getByRole('complementary', { name: 'Field guide overview' })
    expect(within(fieldGuide).queryByText('TIP 26')).not.toBeInTheDocument()
    expect(within(fieldGuide).getByText('Mission-focused outcomes')).toBeInTheDocument()
    expect(within(fieldGuide).getByText(String(directorates.length).padStart(2, '0'))).toBeInTheDocument()
    expect(within(fieldGuide).getByText('Staff Functions')).toBeInTheDocument()
    expect(screen.getByText('Choose the staff function closest to the mission outcome or workflow.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Maritime Operations Center/i })).toHaveAttribute('href', '/maritime-operations-center')
    expect(screen.queryByRole('link', { name: 'Staff Functions' })).not.toBeInTheDocument()
    expect(screen.getAllByText('Honolulu, Hawaii').length).toBeGreaterThan(0)
    expect(screen.getAllByText('October 26\u201329, 2026').length).toBeGreaterThan(0)
    screen.getAllByRole('link', { name: 'Request a Meeting' }).forEach((link) => {
      expect(link).toHaveAttribute('href', getMeetingCtaUrl())
    })
  })

  it('uses one reusable route template for directorate detail views', async () => {
    const user = userEvent.setup()
    render(<App />)
    const scrollTo = vi.mocked(window.scrollTo)
    scrollTo.mockClear()

    await user.click(screen.getByRole('link', { name: 'Explore J2 / N2 Intelligence' }))

    expect(screen.getByRole('heading', { name: 'Intelligence' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Intelligence' })).toHaveFocus()
    expect(screen.getByText('Targeting / Intelligence')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Identity resolution' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to staff functions' })).toHaveAttribute('href', '/#staff-functions')
    expect(window.location.pathname).toBe('/jn/j2-n2')
    await waitFor(() => expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'instant' }))
  })

  it('keeps an accessible return control on staff details and restores the staff-function section', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/jn/j6-n6')
    render(<App />)

    const backLink = screen.getByRole('link', { name: 'Back to staff functions' })
    expect(backLink).toHaveAttribute('href', '/#staff-functions')
    backLink.focus()
    expect(backLink).toHaveFocus()

    const scrollIntoView = vi.mocked(Element.prototype.scrollIntoView)
    scrollIntoView.mockClear()
    await user.keyboard('{Enter}')

    const staffSection = await screen.findByRole('region', { name: 'Explore by Staff Function' })
    expect(window.location.pathname).toBe('/')
    expect(window.location.hash).toBe('#staff-functions')
    expect(staffSection).toHaveFocus()
    await waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'instant', block: 'start' })
    })
  })

  it('resolves legacy index paths to the direct landing experience', () => {
    window.history.replaceState({}, '', '/capabilities')
    render(<App />)

    expect(screen.getByRole('heading', { name: 'UiPath at TechNet Indo-Pacific 2026' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Explore by Staff Function' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Capabilities' })).not.toBeInTheDocument()
  })

  it('opens Maritime Operations Center directly with standardized detail sections', () => {
    window.history.replaceState({}, '', '/maritime-operations-center')
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Maritime Operations Center' })).toBeInTheDocument()
    expect(screen.getByText('Mission Challenge')).toBeInTheDocument()
    expect(screen.getByText('UiPath Capability')).toBeInTheDocument()
    expect(screen.getByText('Relevant Use Case')).toBeInTheDocument()
    expect(screen.queryByText('Demo')).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Back to staff functions' })).not.toBeInTheDocument()
  })

  it('renders grounded N6 Security Operations content without placeholder demos', () => {
    window.history.replaceState({}, '', '/jn/j6-n6')
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Communications, IT & Cyber' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Security Operations / SOC' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Open UiPath Test Cloud overview/i })).toHaveAttribute(
      'href',
      'https://www.uipath.com/product/test-cloud',
    )
    expect(screen.queryByText('Placeholder')).not.toBeInTheDocument()
  })

  it('filters the resource shell and explains empty categories', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/resources')
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Customer Story' }))

    expect(screen.getByRole('heading', { name: /No approved customer story resources/i })).toBeInTheDocument()
    expect(screen.getByText(/will be added here as they are approved/i)).toBeInTheDocument()
  })

  it('uses one team-level pre-populated meeting request', () => {
    window.history.replaceState({}, '', '/meet')
    render(<App />)

    const meetingSection = screen.getByRole('region', { name: 'Continue the conversation in Honolulu.' })
    expect(within(meetingSection).getByText('Share the staff function or mission workflow you want to explore. We’ll use your note to prepare a focused conversation.')).toBeInTheDocument()
    const meetingLinks = within(meetingSection).getAllByRole('link', { name: 'Request a Meeting' })
    expect(meetingLinks).toHaveLength(1)
    expect(meetingLinks[0]).toHaveAttribute('href', getMeetingCtaUrl())
    expect(meetingLinks[0].getAttribute('href')).toContain(`mailto:${contacts.map((contact) => contact.email).join(',')}?`)
    expect(meetingLinks[0].getAttribute('href')).toContain('TechNet%20Indo-Pacific%202026')
    expect(meetingLinks[0].getAttribute('href')).toContain('Topic%20or%20workflow')
    expect(meetingLinks[0].getAttribute('href')).not.toContain('+')
    expect(meetingLinks[0]).toHaveAttribute('target', '_blank')
    expect(meetingLinks[0]).toHaveAttribute('rel', 'noopener noreferrer')

    contacts.forEach((contact) => {
      expect(within(meetingSection).getByText(contact.email)).toBeInTheDocument()
      expect(within(meetingSection).queryByRole('link', { name: contact.email })).not.toBeInTheDocument()
    })
    const emailActions = within(meetingSection).getAllByRole('link').filter((link) => link.getAttribute('href')?.startsWith('mailto:'))
    expect(emailActions).toHaveLength(1)
    expect(emailActions[0]).toHaveAttribute('href', getMeetingCtaUrl())
  })

  it('supports an Escape-close mobile navigation drawer', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: 'Open navigation' })
    await user.click(menuButton)
    const mobileNavigation = screen.getByLabelText('Mobile navigation')
    expect(mobileNavigation).toBeInTheDocument()
    expect(within(mobileNavigation).getByRole('link', { name: 'Request a Meeting' })).toHaveAttribute('href', getMeetingCtaUrl())

    await user.keyboard('{Escape}')
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
