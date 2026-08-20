import { Box, type SxProps, type Theme } from '@mui/material'
import { type ElementType, type ReactNode } from 'react'

interface Props {
  component?: ElementType
  sx?: SxProps<Theme>
  children?: ReactNode
}

export default function AppBox({ component, sx, children }: Props) {
  return (
    <Box {...(component ? { component } : {})} sx={sx}>
      {children}
    </Box>
  )
}
