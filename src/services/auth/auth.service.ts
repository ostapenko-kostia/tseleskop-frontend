import { api } from '../../lib/axios'
import { useAuthStore } from '../../store/auth.store'

class AuthService {
	async auth(data: { initData: any; pin: string }) {
		const res = await api.post('/auth/telegram', data)
		if (res?.data) {
			useAuthStore.setState({ user: res.data.user, isAuth: true })
			return res
		}
		throw new Error()
	}

	async refresh() {
		try {
			const res = await api.post('/auth/refresh')
			if (res?.data) {
				useAuthStore.setState({ user: res.data.user, isAuth: true })
				return res
			}
			throw new Error()
		} catch {}
	}
}

export const authService = new AuthService()
