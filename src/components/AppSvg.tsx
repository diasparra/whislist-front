import { Box, type SxProps, type Theme } from '@mui/material'

interface Props {
  name: string
  sx?: SxProps<Theme>
}

export default function AppSvg({ name, sx }: Props) {
  return (
    <Box component="svg" role="presentation" aria-hidden="true" sx={sx}>
      <use href={`/icons.svg#${name}`} />
    </Box>
  )
}
