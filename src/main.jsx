import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import ThemeProvider from './context/ThemeProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

