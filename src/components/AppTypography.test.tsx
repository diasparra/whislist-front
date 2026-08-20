import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppTypography from './AppTypography.tsx'

describe('AppTypography', () => {
  it('renders string children', () => {
    render(<AppTypography value="Hello" />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders an array of nodes', () => {
    render(
      <AppTypography
        value={['Edit ', <code key="c">src/App.tsx</code>, ' and save']}
      />,
    )
    expect(screen.getByText('src/App.tsx')).toBeInTheDocument()
    expect(screen.getByText(/Edit/)).toBeInTheDocument()
  })
})
