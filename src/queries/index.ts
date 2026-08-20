import type { TodoDTO, UpdateTodoDTO } from '../dto'
import { CreateTodoSchema, UpdateTodoSchema } from '../schemas'

function isReadonly(): boolean {
  return import.meta.env.VITE_READONLY === 'true'
}

function apiUrl(): string {
  return import.meta.env.VITE_API_URL
}

function todosCollectionUrl(): string {
  return isReadonly()
    ? `${import.meta.env.BASE_URL}${apiUrl()}`
    : `${apiUrl()}/todos`
}

export async function getTodos(): Promise<TodoDTO[]> {
  return fetch(todosCollectionUrl()).then((res) => res.json())
}

export async function postTodo(formData: FormData): Promise<TodoDTO> {
  if (isReadonly()) {
    return Promise.reject(new Error('postTodo is disabled in read-only mode'))
  }

  const data = Object.fromEntries(formData.entries())
  const result = CreateTodoSchema.safeParse(data)
  if (!result.success) {
    return Promise.reject(result.error)
  } else {
    return fetch(todosCollectionUrl(), {
      method: 'POST',
      body: JSON.stringify(result.data),
    }).then((res) => res.json())
  }
}

export async function putTodo(newValue: UpdateTodoDTO): Promise<TodoDTO> {
  if (isReadonly()) {
    return Promise.reject(new Error('putTodo is disabled in read-only mode'))
  }

  const { data, success, error } = UpdateTodoSchema.safeParse(newValue)
  if (!success) {
    return Promise.reject(error)
  } else {
    return fetch(`${apiUrl()}/todos/${newValue.id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then((res) => res.json())
  }
}
