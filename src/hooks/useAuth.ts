import { authService } from '../services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { InitData } from '@telegram-apps/sdk'

export function useAuth() {
	return useMutation({
		mutationFn: async (data: { initData: InitData; pin: string }) => {
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
