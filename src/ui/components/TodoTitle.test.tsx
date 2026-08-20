import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import TodoTitle from './TodoTitle.tsx'
import type { TodoDTO } from '../../dto'

function makeTodo(overrides: Partial<TodoDTO> = {}): TodoDTO {
  return {
    id: '1',
    title: 'Buy milk',
    date: '2026-08-20',
    ...overrides,
  }
}

describe('TodoTitle', () => {
  it('renders the todo title', () => {
    render(<TodoTitle item={makeTodo({ title: 'Buy milk' })} />)
    expect(screen.getByText('Buy milk')).toBeInTheDocument()
  })

  it('strikes through the title when checked', () => {
    render(<TodoTitle item={makeTodo({ checked: true })} />)
    expect(screen.getByText('Buy milk')).toHaveStyle({
      textDecoration: 'line-through',
    })
  })

  it('does not strike through the title when unchecked', () => {
    render(<TodoTitle item={makeTodo({ checked: false })} />)
    expect(screen.getByText('Buy milk')).toHaveStyle({
      textDecoration: 'none',
    })
  })
})
