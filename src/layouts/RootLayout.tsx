import { type ReactNode, StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { TodoProvider } from '../providers/TodoProviders'

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  const queryClient = new QueryClient()

  const theme = createTheme({
    colorSchemes: {
      dark: true,
    },
  })

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme={true} />
          <TodoProvider>{children}</TodoProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>
  )
}
