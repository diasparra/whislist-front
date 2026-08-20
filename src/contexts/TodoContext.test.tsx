import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TodoContext, useTodos } from './TodoContext.tsx'

function Consumer() {
  const { todos } = useTodos()
  return <span>{todos.length}</span>
}

describe('useTodos', () => {
  it('throws when used outside of a TodoProvider', () => {
    expect(() => render(<Consumer />)).toThrow(
      'useTodos must be used within a TodoProvider',
    )
  })

  it('returns the provided context value', () => {
    render(
      <TodoContext.Provider
        value={{
          todos: [{ id: '1', title: 'Buy milk', date: '2026-08-20' }],
          isLoading: false,
          isError: false,
          isPending: false,
          addTodo: () => {},
          checkTodo: () => {},
        }}
      >
        <Consumer />
      </TodoContext.Provider>,
    )
    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
