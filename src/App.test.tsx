import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { App } from './App'
import { capabilities, contacts, getContactCtaUrl } from './content'

describe('UiPath at TechNet Indo-Pacific 2026', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/')
  })

  it('renders the public field guide skeleton and all eight J/N tiles', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'UiPath at TechNet Indo-Pacific 2026' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /View .* use cases/i })).toHaveLength(8)
    expect(screen.getAllByText('Honolulu, Hawaii').length).toBeGreaterThan(0)
    expect(screen.getAllByText('October 26–29, 2026').length).toBeGreaterThan(0)
  })

  it('uses one reusable route template for directorate detail views', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: 'View J2 / N2 Intelligence use cases' }))

    expect(screen.getByRole('heading', { name: 'Intelligence' })).toBeInTheDocument()
    expect(screen.getByText('Targeting / Intelligence')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Identity resolution' })).toBeInTheDocument()
    expect(window.location.pathname).toBe('/jn/j2-n2')
  })

  it('renders the canonical capability model with directorate mappings', () => {
    window.history.replaceState({}, '', '/capabilities')
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Capabilities' })).toBeInTheDocument()
    expect(screen.getAllByText('View Capability')).toHaveLength(6)

    const entityResolution = capabilities.find((capability) => capability.id === 'entity-resolution')
    expect(entityResolution?.directorateMappings).toHaveLength(4)
  })

  it('filters the resource shell and explains empty categories', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/resources')
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Customer Story' }))

    expect(screen.getByRole('heading', { name: /No customer story assets/i })).toBeInTheDocument()
    expect(screen.getByText(/ready for the next customer-facing content-ingestion pass/i)).toBeInTheDocument()
  })

  it('builds pre-populated mailto links when no booking URL is configured', () => {
    window.history.replaceState({}, '', '/meet')
    render(<App />)

    const meetingLinks = screen.getAllByRole('link', { name: /Request a meeting/i })
    expect(meetingLinks).toHaveLength(2)
    expect(meetingLinks[0]).toHaveAttribute('href', getContactCtaUrl(contacts[0]))
    expect(meetingLinks[0].getAttribute('href')).toContain('TechNet+Indo-Pacific+2026')
    expect(meetingLinks[0].getAttribute('href')).toContain('Area+%2F+J-N+Code')
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
