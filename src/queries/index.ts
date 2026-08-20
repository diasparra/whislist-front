import type { TodoDTO, UpdateTodoDTO } from '../dto'
import { CreateTodoSchema, UpdateTodoSchema } from '../schemas'

export async function getTodos(): Promise<TodoDTO[]> {
  return fetch('http://localhost:3000/todos').then((res) => res.json())
}

export async function postTodo(formData: FormData): Promise<TodoDTO> {
  const data = Object.fromEntries(formData.entries())
  const result = CreateTodoSchema.safeParse(data)
  if (!result.success) {
    console.log(result.error)
    return Promise.reject(result.error)
  } else {
    return fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify(result.data),
    }).then((res) => res.json())
  }
}

export async function putTodo(newValue: UpdateTodoDTO): Promise<TodoDTO> {
  const { data, success, error } = UpdateTodoSchema.safeParse(newValue)
  console.log('data', data, success, error)
  if (!success) {
    return Promise.reject(error)
  } else {
    console.log('newValue', newValue)
    return fetch(`http://localhost:3000/todos/${newValue.id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then((res) => res.json())
  }
}
