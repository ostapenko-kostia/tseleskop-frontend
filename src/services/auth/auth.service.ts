import { api } from '../../lib/axios'
import { setAccessToken } from './auth.helper'
import { useAuthStore } from '../../store/auth.store'

class AuthService {
	async auth(data: {
		first_name: string
		last_name: string
		username: string
		id: number
		photo_url: string
		pin: string
	}) {
		const res = await api.post('/auth/telegram', data)
		if (res?.data) {
			setAccessToken(res.data.accessToken)
			useAuthStore.setState({ user: res.data.user, isAuth: true })
			return res
		}
		throw new Error()
	}

	async refresh() {
		try {
			const res = await api.post('/auth/refresh')
			if (res?.data) {
				setAccessToken(res.data.accessToken)
				useAuthStore.setState({ user: res.data.user, isAuth: true })
				return res
			}
			throw new Error()
		} catch {}
	}
}

export const authService = new AuthService()
