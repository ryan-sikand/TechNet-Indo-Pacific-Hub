import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { contacts } from './content'
import { getMeetingCtaUrl } from './content/contacts'

describe('UiPath at TechNet Indo-Pacific 2026', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/')
  })

  it('renders the public field guide skeleton and all eight J/N tiles', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'UiPath at TechNet Indo-Pacific 2026' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Explore by Staff Function' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /^Explore J/i })).toHaveLength(8)
    expect(screen.getByRole('link', { name: /Maritime Operations Center/i })).toHaveAttribute('href', '/maritime-operations-center')
    expect(screen.queryByRole('link', { name: 'Staff Functions' })).not.toBeInTheDocument()
    expect(screen.getAllByText('Honolulu, Hawaii').length).toBeGreaterThan(0)
    expect(screen.getAllByText('October 26\u201329, 2026').length).toBeGreaterThan(0)
  })

  it('uses one reusable route template for directorate detail views', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: 'Explore J2 / N2 Intelligence' }))

    expect(screen.getByRole('heading', { name: 'Intelligence' })).toBeInTheDocument()
    expect(screen.getByText('Targeting / Intelligence')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Identity resolution' })).toBeInTheDocument()
    expect(window.location.pathname).toBe('/jn/j2-n2')
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
    const meetingLinks = within(meetingSection).getAllByRole('link', { name: 'Request a Meeting' })
    expect(meetingLinks).toHaveLength(1)
    expect(meetingLinks[0]).toHaveAttribute('href', getMeetingCtaUrl())
    expect(meetingLinks[0].getAttribute('href')).toContain(`mailto:${contacts.map((contact) => contact.email).join(',')}?`)
    expect(meetingLinks[0].getAttribute('href')).toContain('TechNet%20Indo-Pacific%202026')
    expect(meetingLinks[0].getAttribute('href')).toContain('Topic%20or%20workflow')
    expect(meetingLinks[0].getAttribute('href')).not.toContain('+')
    expect(meetingLinks[0]).toHaveAttribute('target', '_blank')
    expect(meetingLinks[0]).toHaveAttribute('rel', 'noopener noreferrer')

    const directEmailLinks = within(meetingSection).getAllByRole('link', { name: /@uipath\.com/i })
    expect(directEmailLinks).toHaveLength(2)
    expect(directEmailLinks[0]).toHaveAttribute('target', '_blank')
    expect(directEmailLinks[0]).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('supports an Escape-close mobile navigation drawer', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: 'Open navigation' })
    await user.click(menuButton)
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
