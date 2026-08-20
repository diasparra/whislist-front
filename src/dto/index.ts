import { z } from 'zod'
import { TodoSchema, UpdateTodoSchema } from '../schemas'

export type TodoDTO = z.infer<typeof TodoSchema>

export type UpdateTodoDTO = z.infer<typeof UpdateTodoSchema>
