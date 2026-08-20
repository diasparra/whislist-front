import { z } from 'zod'

export const TodoSchema = z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  checked: z.boolean().optional(),
})

export const CreateTodoSchema = z.object({
  title: z.string(),
  date: z.string(),
})

export const UpdateTodoSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  date: z.string().optional(),
  checked: z.boolean().optional(),
})
