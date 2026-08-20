import { Button } from '@mui/material'

interface Props {
  value: number
  onClick?: () => void
}

export default function AppButton({ value, onClick }: Props) {
  return (
    <Button
      type="button"
      variant="contained"
      onClick={onClick}
      sx={{
        fontSize: 16,
        px: '10px',
        py: '5px',
        borderRadius: '5px',
        color: 'var(--accent)',
        backgroundColor: 'var(--accent-bg)',
        border: '2px solid transparent',
        transition: 'border-color 0.3s',
        mb: 3,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: 'var(--accent-bg)',
          borderColor: 'var(--accent-border)',
        },
        '&:focus-visible': {
          outline: '2px solid var(--accent)',
          outlineOffset: '2px',
        },
      }}
    >
      Count is {value}
    </Button>
  )
}
