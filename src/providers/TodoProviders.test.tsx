import type { ReactNode } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TodoProvider } from './TodoProviders.tsx'
import { useTodos } from '../contexts/TodoContext'
import { getTodos, postTodo, putTodo } from '../queries'

vi.mock('../queries', () => ({
  getTodos: vi.fn(),
  postTodo: vi.fn(),
  putTodo: vi.fn(),
}))

function renderWithProvider(children: ReactNode) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  })
  return render(
    <QueryClientProvider client={queryClient}>
      <TodoProvider>{children}</TodoProvider>
    </QueryClientProvider>,
  )
}

function Consumer() {
  const { todos, isLoading, isReadonly, addTodo, checkTodo } = useTodos()
  return (
    <div>
      <span>{isLoading ? 'loading' : `count:${todos.length}`}</span>
      <span>{isReadonly ? 'readonly' : 'writable'}</span>
      <button onClick={() => addTodo(new FormData())}>add</button>
      <button onClick={() => checkTodo({ id: '1', checked: true })}>
        check
      </button>
    </div>
  )
}

describe('TodoProvider', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('exposes the fetched todos once loaded', async () => {
    vi.mocked(getTodos).mockResolvedValue([
      { id: '1', title: 'Buy milk', date: '2026-08-20' },
    ])

    renderWithProvider(<Consumer />)

    expect(screen.getByText('loading')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getByText('count:1')).toBeInTheDocument()
    })
  })

  it('surfaces isReadonly from VITE_READONLY', async () => {
    vi.mocked(getTodos).mockResolvedValue([])
    vi.stubEnv('VITE_READONLY', 'true')

    renderWithProvider(<Consumer />)

    await waitFor(() => {
      expect(screen.getByText('readonly')).toBeInTheDocument()
    })
  })

  it('calls postTodo when addTodo is invoked', async () => {
    vi.mocked(getTodos).mockResolvedValue([])
    vi.mocked(postTodo).mockResolvedValue({
      id: '2',
      title: 'New',
      date: '2026-08-20',
    })

    renderWithProvider(<Consumer />)
    await waitFor(() => screen.getByText('count:0'))

    fireEvent.click(screen.getByText('add'))

    await waitFor(() => {
      expect(postTodo).toHaveBeenCalledTimes(1)
    })
  })

  it('calls putTodo when checkTodo is invoked', async () => {
    vi.mocked(getTodos).mockResolvedValue([])
    vi.mocked(putTodo).mockResolvedValue({
      id: '1',
      title: 'Buy milk',
      date: '2026-08-20',
      checked: true,
    })

    renderWithProvider(<Consumer />)
    await waitFor(() => screen.getByText('count:0'))

    fireEvent.click(screen.getByText('check'))

    await waitFor(() => {
      expect(putTodo).toHaveBeenCalledTimes(1)
    })
    expect(vi.mocked(putTodo).mock.calls[0][0]).toEqual({
      id: '1',
      checked: true,
    })
  })

  it('logs the error when addTodo fails', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    vi.mocked(getTodos).mockResolvedValue([])
    vi.mocked(postTodo).mockRejectedValue(new Error('boom'))

    renderWithProvider(<Consumer />)
    await waitFor(() => screen.getByText('count:0'))

    fireEvent.click(screen.getByText('add'))

    await waitFor(() => {
      expect(consoleError).toHaveBeenCalledWith(new Error('boom'))
    })
    consoleError.mockRestore()
  })

  it('logs the error when checkTodo fails', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    vi.mocked(getTodos).mockResolvedValue([])
    vi.mocked(putTodo).mockRejectedValue(new Error('boom'))

    renderWithProvider(<Consumer />)
    await waitFor(() => screen.getByText('count:0'))

    fireEvent.click(screen.getByText('check'))

    await waitFor(() => {
      expect(consoleError).toHaveBeenCalledWith(new Error('boom'))
    })
    consoleError.mockRestore()
  })
})
