import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppDatePicker from './AppDatePicker.tsx'

describe('AppDatePicker', () => {
  it('renders a field with the given label', () => {
    render(<AppDatePicker label="Due date" />)
    expect(screen.getAllByLabelText('Due date').length).toBeGreaterThan(0)
  })

  it('forwards id and name to the underlying input', () => {
    const { container } = render(
      <AppDatePicker id="date" name="date" label="Due date" />,
    )
    const input = container.querySelector('input[name="date"]')
    expect(input).toHaveAttribute('id', 'date')
  })
})
