import { createContext, useContext } from 'react'
import type { TodoDTO, UpdateTodoDTO } from '../dto'

interface TodoContextValue {
  todos: TodoDTO[]
  isLoading: boolean
  isError: boolean
  isPending: boolean
  addTodo: (data: FormData) => void
  checkTodo: (newValue: UpdateTodoDTO) => void
}

export const TodoContext = createContext<TodoContextValue | undefined>(
  undefined,
)

export function useTodos() {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider')
  }

  return context
}
