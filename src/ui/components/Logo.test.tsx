import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Logo from './Logo.tsx'

describe('Logo', () => {
  it('renders the hero, react and vite images', () => {
    render(<Logo />)
    expect(screen.getByAltText('hero')).toBeInTheDocument()
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
  })
})
