import type { TodoDTO } from '../../dto'
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material'

interface Props {
  item: TodoDTO
}

export default function TodoChecked({ item }: Props) {
  return item.checked ? (
    <CheckCircle color={'primary'} />
  ) : (
    <RadioButtonUnchecked />
  )
}
