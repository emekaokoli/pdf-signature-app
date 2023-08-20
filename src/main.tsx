import App from '@/App'
import { Toaster } from "@/components/ui/toaster"
import { DocumentProvider } from '@/context/DocumentContext'
import { FallBackError } from '@/errors/FallBackError'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={FallBackError}>
        <BrowserRouter >
          <DocumentProvider>
            <App />
          </DocumentProvider>
          <Toaster />
        </BrowserRouter>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode >,
)
