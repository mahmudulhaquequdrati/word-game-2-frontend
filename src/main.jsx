import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import GlobalStoreProvider from './ContextApi/Context'
import Context from './ContextApi/Context'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Context>
    <App />
    </Context>
    </QueryClientProvider>
  // </React.StrictMode>,
)
