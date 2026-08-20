import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import AppSvg from './AppSvg.tsx'

describe('AppSvg', () => {
  it('renders a presentation svg pointing at the icon sprite', () => {
    const { container } = render(<AppSvg name="github-icon" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('role', 'presentation')
    expect(svg).toHaveAttribute('aria-hidden', 'true')

    const use = container.querySelector('use')
    expect(use).toHaveAttribute('href', '/icons.svg#github-icon')
  })
})
