import { type ReactNode, StrictMode } from 'react'

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return <StrictMode>{children}</StrictMode>
}
