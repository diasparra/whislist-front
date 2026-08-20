import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Tick from './Tick.tsx'

describe('Tick', () => {
  it('renders without throwing', () => {
    const { container } = render(<Tick />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
