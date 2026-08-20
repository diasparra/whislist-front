import { Typography, type TypographyProps } from '@mui/material'
import type { ReactNode } from 'react'

interface Props {
  value: ReactNode
  type?: 'title' | 'subtitle'
}

export default function AppTitle({ value, type }: Props) {
  let variant: TypographyProps['variant'] = 'body1'

  switch (type) {
    case 'title':
      variant = 'h3'
      break
    case 'subtitle':
      variant = 'h5'
      break
  }

  return (
    <Typography
      variant={variant}
      sx={{
        color: (theme) => theme.palette.common.white,
      }}
    >
      {value}
    </Typography>
  )
}
