import { type ReactNode } from 'react'
import { Box, type SxProps, type Theme } from '@mui/material'

interface Props {
  href?: string
  children?: ReactNode
  sx?: SxProps<Theme>
}

export default function AppLink({ href, sx, children }: Props) {
  return (
    <Box component={'a'} href={href} target="_blank" sx={sx}>
      {children}
    </Box>
  )
}
