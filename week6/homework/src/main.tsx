import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/shared/styles/theme.css'
import App from './app/App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './shared/api/queryClient.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
