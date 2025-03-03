import { authService } from '../services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { InitDataWithPin } from '../types/telegram'

export function useAuth() {
	return useMutation({
		mutationFn: async (data: InitDataWithPin) => {
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
