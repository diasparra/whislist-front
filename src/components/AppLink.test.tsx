import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppLink from './AppLink.tsx'

describe('AppLink', () => {
  it('renders href, target and children', () => {
    render(<AppLink href="https://example.com">Example</AppLink>)
    const link = screen.getByText('Example')
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
