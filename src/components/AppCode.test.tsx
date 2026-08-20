import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppCode from './AppCode.tsx'

describe('AppCode', () => {
  it('renders the value inside a code element', () => {
    render(<AppCode value="src/App.tsx" />)
    const el = screen.getByText('src/App.tsx')
    expect(el.tagName).toBe('CODE')
  })
})
