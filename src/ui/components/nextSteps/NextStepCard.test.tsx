import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import NextStepCard from './NextStepCard.tsx'

describe('NextStepCard', () => {
  it('renders the title, description and children', () => {
    render(
      <NextStepCard
        icon="documentation-icon"
        title="Documentation"
        description="Your questions, answered"
      >
        <p>child content</p>
      </NextStepCard>,
    )
    expect(
      screen.getByRole('heading', { name: 'Documentation' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Your questions, answered')).toBeInTheDocument()
    expect(screen.getByText('child content')).toBeInTheDocument()
  })
})
