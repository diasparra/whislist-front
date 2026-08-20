import { afterEach, describe, expect, it, vi } from 'vitest'
import { getTodos, postTodo, putTodo } from './index.ts'

describe('getTodos', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('fetches and returns the todos', async () => {
    const todos = [{ id: '1', title: 'Buy milk', date: '2026-08-20' }]
    const fetchMock = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(todos),
    })
    vi.stubGlobal('fetch', fetchMock)

    const result = await getTodos()

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:3000/todos')
    expect(result).toEqual(todos)
  })
})

describe('postTodo', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('posts valid form data', async () => {
    const created = { id: '1', title: 'Buy milk', date: '2026-08-20' }
    const fetchMock = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(created),
    })
    vi.stubGlobal('fetch', fetchMock)

    const formData = new FormData()
    formData.set('title', 'Buy milk')
    formData.set('date', '2026-08-20')

    const result = await postTodo(formData)

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:3000/todos',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ title: 'Buy milk', date: '2026-08-20' }),
      }),
    )
    expect(result).toEqual(created)
  })

  it('rejects and does not call fetch when form data is invalid', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    const formData = new FormData()
    formData.set('title', 'Buy milk')

    await expect(postTodo(formData)).rejects.toBeDefined()
    expect(fetchMock).not.toHaveBeenCalled()
  })
})

describe('putTodo', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('patches the todo at its id', async () => {
    const updated = { id: '1', title: 'Buy milk', checked: true }
    const fetchMock = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(updated),
    })
    vi.stubGlobal('fetch', fetchMock)

    const result = await putTodo({ id: '1', checked: true })

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:3000/todos/1',
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ id: '1', checked: true }),
      }),
    )
    expect(result).toEqual(updated)
  })

  it('rejects and does not call fetch when the payload is invalid', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    await expect(
      // @ts-expect-error missing required id
      putTodo({ checked: true }),
    ).rejects.toBeDefined()
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
