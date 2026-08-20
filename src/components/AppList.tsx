import { type ReactNode } from 'react'
import { Box } from '@mui/material'

interface Props {
  items: ReactNode[]
}

export default function AppList({ items }: Props) {
  return (
    <Box
      component="ul"
      sx={{
        listStyle: 'none',
        p: 0,
        display: 'flex',
        gap: 1,
        flexWrap: 'wrap',
      }}
    >
      {items.map((item, index) => (
        <Box component={'li'} key={index}>
          {item}
        </Box>
      ))}
    </Box>
  )
}
