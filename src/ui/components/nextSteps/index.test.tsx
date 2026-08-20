import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import NextSteps from './index.tsx'

describe('NextSteps', () => {
  it('renders both cards', () => {
    render(<NextSteps />)
    expect(
      screen.getByRole('heading', { name: 'Documentation' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Connect with us' }),
    ).toBeInTheDocument()
  })

  it('renders all social network links', () => {
    render(<NextSteps />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('Discord')).toBeInTheDocument()
    expect(screen.getByText('X.com')).toBeInTheDocument()
    expect(screen.getByText('Bluesky')).toBeInTheDocument()
  })

  it('renders the documentation links', () => {
    render(<NextSteps />)
    expect(screen.getByText('Explore Vite')).toBeInTheDocument()
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })
})
