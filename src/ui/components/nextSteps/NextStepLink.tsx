import type { ReactNode } from 'react'
import AppLink from '../../../components/AppLink.tsx'

interface Props {
  href: string
  label: string
  icon?: ReactNode
  image?: ReactNode
}

export default function NextStepLink({ href, label, icon, image }: Props) {
  return (
    <AppLink
      href={href}
      sx={{
        color: 'var(--text-h)',
        fontSize: 16,
        borderRadius: '6px',
        background: 'var(--social-bg)',
        display: 'flex',
        px: '12px',
        py: '6px',
        alignItems: 'center',
        gap: 1,
        textDecoration: 'none',
        transition: 'box-shadow 0.3s',
        '&:hover': {
          boxShadow: 'var(--shadow)',
        },
      }}
    >
      {image}
      {icon}
      {label}
    </AppLink>
  )
}
