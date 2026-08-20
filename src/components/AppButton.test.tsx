import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import AppButton from './AppButton.tsx'

describe('AppButton', () => {
  it('renders the value', () => {
    render(<AppButton value={5} />)
    expect(
      screen.getByRole('button', { name: 'Count is 5' }),
    ).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(<AppButton value={0} onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
