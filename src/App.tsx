import { Route, Routes, useLocation } from 'react-router'
import { HomePage, RegisterPage } from './pages'
import { useEffect } from 'react'
import { useAuthStore } from './store/auth.store'

function App() {
	const { isAuth } = useAuthStore()
	const location = useLocation()

	useEffect(() => {
		if (!isAuth && !location.pathname.includes('register'))
			window.location.href = '/register'
	}, [])

	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/register' element={<RegisterPage />} />
		</Routes>
	)
}

export default App
