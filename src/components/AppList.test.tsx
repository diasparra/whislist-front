import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import AppList from './AppList.tsx'

describe('AppList', () => {
  it('renders one list item per entry', () => {
    render(
      <AppList
        items={[
          { id: '1', title: 'one' },
          { id: '2', title: 'two' },
          { id: '3', title: 'three' },
        ]}
      />,
    )
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

  it('renders an icon button when an icon is provided', () => {
    render(
      <AppList items={[{ id: '1', title: 'one', icon: <span>icon</span> }]} />,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('icon')).toBeInTheDocument()
  })

  it('does not render an icon button when no icon is provided', () => {
    render(<AppList items={[{ id: '1', title: 'one' }]} />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('calls onClick with the item id when the icon button is clicked', () => {
    const onClick = vi.fn()
    render(
      <AppList
        items={[{ id: '42', title: 'one', icon: <span>icon</span>, onClick }]}
      />,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledWith('42')
  })
})
