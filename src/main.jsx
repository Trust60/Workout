import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/index.scss'
import AppRoutes from './routes/AppRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppRoutes />
	</React.StrictMode>
)
