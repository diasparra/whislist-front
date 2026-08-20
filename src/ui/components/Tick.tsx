import AppBox from '../../components/AppBox.tsx'

export default function Tick() {
  return (
    <AppBox
      sx={{
        position: 'relative',
        width: '100%',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: '-4.5px',
          border: '5px solid transparent',
        },
        '&::before': {
          left: 0,
          borderLeftColor: 'var(--border)',
        },
        '&::after': {
          right: 0,
          borderRightColor: 'var(--border)',
        },
      }}
    />
  )
}
