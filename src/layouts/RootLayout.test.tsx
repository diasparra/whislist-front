import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import RootLayout from './RootLayout.tsx'

describe('RootLayout', () => {
  it('renders children', () => {
    render(
      <RootLayout>
        <p>hello</p>
      </RootLayout>,
    )
    expect(screen.getByText('hello')).toBeInTheDocument()
  })
})
