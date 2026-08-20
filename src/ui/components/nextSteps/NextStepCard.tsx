import AppSvg from '../../../components/AppSvg.tsx'
import AppBox from '../../../components/AppBox.tsx'
import AppTitle from '../../../components/AppTitle.tsx'
import AppTypography from '../../../components/AppTypography.tsx'
import type { ReactNode } from 'react'

interface Props {
  icon: string
  title: string
  description: string
  children: ReactNode
  divider?: boolean
}

export default function NextStepCard({
  icon,
  title,
  description,
  children,
  divider,
}: Props) {
  return (
    <AppBox
      sx={{
        flex: '1 1 0',
        p: {
          xs: '24px 20px',
          md: 4,
        },
        borderRight: divider ? '1px solid var(--border)' : undefined,
        textAlign: {
          xs: 'center',
          md: 'left',
        },
        '& .next-icon': {
          width: 22,
          height: 22,
          mb: 2,
        },
        '@media (max-width:1024px)': {
          borderRight: 'none',
          borderBottom: divider ? '1px solid var(--border)' : undefined,
        },
      }}
    >
      <AppSvg
        name={icon}
        sx={{
          height: 22,
          width: 22,
        }}
      />
      <AppTitle value={title} type={'subtitle'} />
      <AppTypography value={description} />
      {children}
    </AppBox>
  )
}
