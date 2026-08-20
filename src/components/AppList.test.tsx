import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppList from './AppList.tsx'

describe('AppList', () => {
  it('renders one list item per entry', () => {
    render(<AppList items={['one', 'two', 'three']} />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items.map((item) => item.textContent)).toEqual([
      'one',
      'two',
      'three',
    ])
  })

  it('renders an empty list when given no items', () => {
    render(<AppList items={[]} />)
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })
})
