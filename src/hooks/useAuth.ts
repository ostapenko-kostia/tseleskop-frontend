import { authService } from '../services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

export function useAuth() {
	return useMutation({
		mutationFn: async (data: { initData: any; pin: string }) => {
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
