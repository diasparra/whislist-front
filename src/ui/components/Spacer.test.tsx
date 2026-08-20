import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Spacer from './Spacer.tsx'

describe('Spacer', () => {
  it('renders as a section', () => {
    const { container } = render(<Spacer />)
    expect(container.querySelector('section')).toBeInTheDocument()
  })
})
