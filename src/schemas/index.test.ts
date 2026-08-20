import { describe, expect, it } from 'vitest'
import { CreateTodoSchema, TodoSchema, UpdateTodoSchema } from './index.ts'

describe('TodoSchema', () => {
  it('accepts a valid todo', () => {
    const result = TodoSchema.safeParse({
      id: '1',
      title: 'Buy milk',
      date: '2026-08-20',
      checked: true,
    })
    expect(result.success).toBe(true)
  })

  it('accepts a todo without checked', () => {
    const result = TodoSchema.safeParse({
      id: '1',
      title: 'Buy milk',
      date: '2026-08-20',
    })
    expect(result.success).toBe(true)
  })

  it('rejects a todo missing required fields', () => {
    const result = TodoSchema.safeParse({ id: '1' })
    expect(result.success).toBe(false)
  })
})

describe('CreateTodoSchema', () => {
  it('accepts a valid payload', () => {
    const result = CreateTodoSchema.safeParse({
      title: 'Buy milk',
      date: '2026-08-20',
    })
    expect(result.success).toBe(true)
  })

  it('rejects a payload missing the date', () => {
    const result = CreateTodoSchema.safeParse({ title: 'Buy milk' })
    expect(result.success).toBe(false)
  })
})

describe('UpdateTodoSchema', () => {
  it('accepts an id-only payload', () => {
    const result = UpdateTodoSchema.safeParse({ id: '1' })
    expect(result.success).toBe(true)
  })

  it('accepts a full payload', () => {
    const result = UpdateTodoSchema.safeParse({
      id: '1',
      title: 'Buy milk',
      date: '2026-08-20',
      checked: true,
    })
    expect(result.success).toBe(true)
  })

  it('rejects a payload missing the id', () => {
    const result = UpdateTodoSchema.safeParse({ title: 'Buy milk' })
    expect(result.success).toBe(false)
  })
})
