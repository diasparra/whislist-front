import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

interface Props {
  id?: string
  name?: string
  label: string
}

export default function AppDatePicker({id, name, label }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label={label}
          slotProps={{
            textField: {
              id,
              name,
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}
