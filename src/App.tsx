import { Route, Routes } from 'react-router'
import { HomePage, RegisterPage } from './pages'
import { useEffect } from 'react'
import { init } from '@telegram-apps/sdk'

function App() {
	useEffect(()=>{
		init()
	}, [])
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/register' element={<RegisterPage />} />
		</Routes>
	)
}

export default App
