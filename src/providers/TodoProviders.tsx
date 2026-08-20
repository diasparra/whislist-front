import { type ReactNode } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getTodos, postTodo, putTodo } from '../queries'
import { TodoContext } from '../contexts/TodoContext'

interface Props {
  children: ReactNode
}

export function TodoProvider({ children }: Props) {
  const queryClient = useQueryClient()

  const {
    data: todos = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  const saveTodo = useMutation({
    mutationFn: postTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
    onError: async (error) => console.error(error),
  })

  const checkTodo = useMutation({
    mutationFn: putTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
    onError: async (error) => console.error(error),
  })

  return (
    <TodoContext.Provider
      value={{
        todos,
        isLoading,
        isError,
        isPending: saveTodo.isPending,
        addTodo: saveTodo.mutate,
        checkTodo: checkTodo.mutate,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
