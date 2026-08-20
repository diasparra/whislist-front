import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import TodoChecked from './TodoChecked.tsx'
import type { TodoDTO } from '../../dto'

function makeTodo(overrides: Partial<TodoDTO> = {}): TodoDTO {
  return {
    id: '1',
    title: 'Buy milk',
    date: '2026-08-20',
    ...overrides,
  }
}

describe('TodoChecked', () => {
  it('renders a check circle icon when checked', () => {
    const { container } = render(
      <TodoChecked item={makeTodo({ checked: true })} />,
    )
    expect(container.querySelector('svg')).toHaveAttribute(
      'data-testid',
      'CheckCircleIcon',
    )
  })

  it('renders a radio button unchecked icon when not checked', () => {
    const { container } = render(
      <TodoChecked item={makeTodo({ checked: false })} />,
    )
    expect(container.querySelector('svg')).toHaveAttribute(
      'data-testid',
      'RadioButtonUncheckedIcon',
    )
  })
})
