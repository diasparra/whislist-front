import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import HomePage from './HomePage.tsx'
import { useTodos } from '../contexts/TodoContext'
import type { TodoDTO } from '../dto'

vi.mock('../contexts/TodoContext', () => ({
  useTodos: vi.fn(),
}))

function mockUseTodos(overrides: Partial<ReturnType<typeof useTodos>> = {}) {
  vi.mocked(useTodos).mockReturnValue({
    todos: [],
    isLoading: false,
    isError: false,
    isPending: false,
    isReadonly: false,
    addTodo: vi.fn(),
    checkTodo: vi.fn(),
    ...overrides,
  })
}

describe('HomePage', () => {
  it('renders the tasks title', () => {
    mockUseTodos()
    render(<HomePage />)
    expect(screen.getByRole('heading', { name: 'Tasks' })).toBeInTheDocument()
  })

  it('renders one list item per todo', () => {
    const todos: TodoDTO[] = [
      { id: '1', title: 'Buy milk', date: '2026-08-20' },
      { id: '2', title: 'Walk the dog', date: '2026-08-21', checked: true },
    ]
    mockUseTodos({ todos })
    render(<HomePage />)
    expect(screen.getByText('Buy milk')).toBeInTheDocument()
    expect(screen.getByText('Walk the dog')).toBeInTheDocument()
  })

  it('calls addTodo with the form data on submit', () => {
    const addTodo = vi.fn()
    mockUseTodos({ addTodo })
    render(<HomePage />)

    fireEvent.change(screen.getByLabelText('Title'), {
      target: { value: 'Buy milk' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Add Todo' }))

    expect(addTodo).toHaveBeenCalledTimes(1)
    expect(addTodo.mock.calls[0][0].get('title')).toBe('Buy milk')
  })

  it('calls checkTodo when a todo icon is clicked', () => {
    const checkTodo = vi.fn()
    const todos: TodoDTO[] = [
      { id: '1', title: 'Buy milk', date: '2026-08-20', checked: false },
    ]
    mockUseTodos({ todos, checkTodo })
    render(<HomePage />)

    fireEvent.click(screen.getByRole('button', { name: '' }))

    expect(checkTodo).toHaveBeenCalledWith({ id: '1', checked: true })
  })

  it('disables the submit and reset buttons while pending', () => {
    mockUseTodos({ isPending: true })
    render(<HomePage />)
    expect(screen.getByRole('button', { name: 'Add Todo' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDisabled()
  })

  it('hides the add-task form when readonly', () => {
    mockUseTodos({ isReadonly: true })
    render(<HomePage />)
    expect(screen.queryByLabelText('Title')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Add Todo' }),
    ).not.toBeInTheDocument()
  })

  it('does not call checkTodo when a todo icon is clicked while readonly', () => {
    const checkTodo = vi.fn()
    const todos: TodoDTO[] = [
      { id: '1', title: 'Buy milk', date: '2026-08-20', checked: false },
    ]
    mockUseTodos({ todos, checkTodo, isReadonly: true })
    render(<HomePage />)

    fireEvent.click(screen.getByRole('button', { name: '' }))

    expect(checkTodo).not.toHaveBeenCalled()
  })
})
