import { Route, Routes, useLocation, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { useAuthStore } from './store/auth.store'

import { SettingsPage } from './pages/SettingsPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicy'
import { HomePage } from './pages/Home'
import { RegisterPage } from './pages/Register'
import { PersonalDataAgreementPage } from './pages/PersonalDataAgreement'
import { HelloPage } from './pages/HelloPage'
import { LoginPage } from './pages/Login'

const PAGES_WITHOUT_AUTH = ['/register', '/hello', '/login']

function App() {
	const { isAuth } = useAuthStore()
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth && !PAGES_WITHOUT_AUTH.includes(location.pathname))
			navigate('/register')
	}, [isAuth, window.location.href])

	useEffect(() => {
		if (sessionStorage.getItem('helloShown') !== 'true') navigate('/hello')
	}, [sessionStorage.getItem('helloShown')])

	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/hello' element={<HelloPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/settings' element={<SettingsPage />} />
			<Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
			<Route
				path='/personal-data-agreement'
				element={<PersonalDataAgreementPage />}
			/>
		</Routes>
	)
}

export default App
