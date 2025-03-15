import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { goalService } from '../services/goal.service'

export function useCreateGoal(cb?: () => void) {
	return useMutation({
		mutationFn: async ({ data }: { data: any }) => {
			const res = await goalService.createGoal(data)
			if (!res?.data) Promise.reject()
			return res
		},
		onSuccess: () => {
			toast.success('Успешно!')
			cb?.()
		},
	})
}
