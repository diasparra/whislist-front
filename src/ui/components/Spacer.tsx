import AppBox from '../../components/AppBox.tsx'

export default function Spacer() {
  return (
    <AppBox
      component="section"
      sx={{
        height: 88,
        borderTop: '1px solid var(--border)',
        '@media (max-width:1024px)': {
          height: 48,
        },
      }}
    />
  )
}
