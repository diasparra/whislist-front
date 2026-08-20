import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppTitle from './AppTitle.tsx'

describe('AppTitle', () => {
  it('renders an h3 for type="title"', () => {
    render(<AppTitle value="Get Started" type="title" />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Get Started' }),
    ).toBeInTheDocument()
  })

  it('renders an h5 for type="subtitle"', () => {
    render(<AppTitle value="Documentation" type="subtitle" />)
    expect(
      screen.getByRole('heading', { level: 5, name: 'Documentation' }),
    ).toBeInTheDocument()
  })

  it('renders body text when no type is given', () => {
    render(<AppTitle value="Plain" />)
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.getByText('Plain')).toBeInTheDocument()
  })
})
