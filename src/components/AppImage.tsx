import IMAGES from '../assets/images'
import { Box, type SxProps, type Theme } from '@mui/material'

type Size = string | number

interface Props {
  src: keyof typeof IMAGES
  alt?: string
  height?: Size
  width?: Size
  sx?: SxProps<Theme>
}

export default function AppImage({ src, alt, width, height, sx }: Props) {
  return (
    <Box
      component={'img'}
      src={IMAGES[src]}
      alt={alt ?? src}
      width={width}
      height={height}
      sx={{ ...sx }}
    />
  )
}
