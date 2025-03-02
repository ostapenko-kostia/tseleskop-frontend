import { Route, Routes } from 'react-router'
import { HomePage, RegisterPage } from './pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/register' element={<RegisterPage />} />
		</Routes>
	)
}

export default App
