import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './assets/styles/index.scss'
import AuthProvider from './providers/AuthProvider'
import AppRoutes from './routes/AppRoutes'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
