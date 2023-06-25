import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from '../components/screens/not-found/NotFound'
import { useAuth } from '../hooks/useAuth'

import { routes } from './routes.data'

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						component={route.component}
						element={<route.component />}
					/>
				))}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutes
