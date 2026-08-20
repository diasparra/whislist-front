import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './ui/HomePage.tsx'
import RootLayout from './layouts/RootLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <RootLayout>
    <HomePage />
  </RootLayout>,
)
