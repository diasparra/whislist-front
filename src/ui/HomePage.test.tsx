import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import HomePage from './HomePage.tsx'

describe('HomePage', () => {
  it('renders the Get Started title', () => {
    render(<HomePage />)
    expect(
      screen.getByRole('heading', { name: 'Get Started' }),
    ).toBeInTheDocument()
  })

  it('increments the count when the button is clicked', () => {
    render(<HomePage />)
    const button = screen.getByRole('button', { name: 'Count is 0' })
    fireEvent.click(button)
    expect(
      screen.getByRole('button', { name: 'Count is 1' }),
    ).toBeInTheDocument()
  })
})
