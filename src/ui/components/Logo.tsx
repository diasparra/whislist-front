import AppImage from '../../components/AppImage.tsx'
import AppBox from '../../components/AppBox.tsx'

export default function Logo() {
  return (
    <AppBox
      sx={{
        position: 'relative',
        '& img': {
          insetInline: 0,
          margin: '0 auto',
        },
      }}
    >
      <AppImage
        src="hero"
        width="170"
        height="179"
        sx={{
          position: 'relative',
          zIndex: 0,
        }}
      />

      <AppImage
        src="react"
        alt="React logo"
        sx={{
          position: 'absolute',
          insetInline: 0,
          margin: '0 auto',
          zIndex: 1,
          top: 34,
          height: 28,
          transform:
            'perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg) scale(1.4)',
        }}
      />

      <AppImage
        src="vite"
        alt="Vite logo"
        sx={{
          position: 'absolute',
          insetInline: 0,
          margin: '0 auto',
          zIndex: 0,
          top: 107,
          height: 26,
          width: 'auto',
          transform:
            'perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg) scale(0.8)',
        }}
      />
    </AppBox>
  )
}
