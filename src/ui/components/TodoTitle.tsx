import type { TodoDTO } from '../../dto'

interface Props {
  item: TodoDTO
}

export default function TodoTitle({ item }: Props) {
  return (
    <span
      style={{
        textDecoration: item.checked ? 'line-through' : 'none',
      }}
    >
      {item.title}
    </span>
  )
}
