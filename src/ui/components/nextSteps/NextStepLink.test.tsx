import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import NextStepLink from './NextStepLink.tsx'

describe('NextStepLink', () => {
  it('renders the label and href', () => {
    render(<NextStepLink href="https://vite.dev/" label="Explore Vite" />)
    const link = screen.getByText('Explore Vite')
    expect(link.closest('a')).toHaveAttribute('href', 'https://vite.dev/')
  })

  it('renders the provided icon and image', () => {
    render(
      <NextStepLink
        href="https://example.com"
        label="Example"
        icon={<span data-testid="icon" />}
        image={<span data-testid="image" />}
      />,
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('image')).toBeInTheDocument()
  })
})
