import { type ReactNode } from 'react'
import { Typography } from '@mui/material'

interface Props {
  value: ReactNode | ReactNode[]
}

export default function AppTypography({ value }: Props) {
  return <Typography>{value}</Typography>
}
