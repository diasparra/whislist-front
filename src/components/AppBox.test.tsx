import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppBox from './AppBox.tsx'

describe('AppBox', () => {
  it('renders children', () => {
    render(<AppBox>content</AppBox>)
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('renders as a div by default', () => {
    render(<AppBox>content</AppBox>)
    expect(screen.getByText('content').tagName).toBe('DIV')
  })

  it('honors the component prop', () => {
    render(<AppBox component="section">content</AppBox>)
    expect(screen.getByText('content').tagName).toBe('SECTION')
  })
})
