import { afterEach, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

beforeEach(() => {
  vi.stubEnv('VITE_API_URL', 'http://localhost:3000')
  vi.stubEnv('VITE_READONLY', 'false')
})

afterEach(() => {
  cleanup()
  vi.unstubAllEnvs()
})
