import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppImage from './AppImage.tsx'
import IMAGES from '../assets/images'

describe('AppImage', () => {
  it('resolves src through the IMAGES map', () => {
    render(<AppImage src="vite" />)
    expect(screen.getByRole('img').getAttribute('src')).toBe(IMAGES.vite)
  })

  it('falls back alt to the image key when not given', () => {
    render(<AppImage src="react" />)
    expect(screen.getByAltText('react')).toBeInTheDocument()
  })

  it('uses the provided alt text', () => {
    render(<AppImage src="react" alt="React logo" />)
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
  })

  it('renders width and height', () => {
    render(<AppImage src="hero" width="170" height="179" />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('width', '170')
    expect(img).toHaveAttribute('height', '179')
  })
})
