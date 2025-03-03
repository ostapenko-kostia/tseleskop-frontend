import { authService } from '../services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

export function useAuth() {
	return useMutation({
		mutationFn: async (data: {
			first_name: string
			last_name?: string
			id: number
			username?: string
			photo_url?: string
			hash?: string
			pin: string
		}) => {
			return await authService.auth(data)
		},
		onSuccess: () => {
			toast.success('Успешно!')
		},
	})
}

export function useRefresh() {
	return useMutation({
		mutationFn: async () => {
			return await authService.refresh()
		},
	})
}
