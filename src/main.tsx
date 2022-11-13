import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { queryClient } from './libs/react-query'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <App />
      </Suspense>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
)
