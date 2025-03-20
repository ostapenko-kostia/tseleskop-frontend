import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { goalService } from '../services/goal.service'

export function useCreateGoal(cb?: () => void) {
	return useMutation({
		mutationFn: async ({ data }: { data: any }) => {
			const { image: _, ...dataWithoutImage } = data
			const formData = new FormData()
			formData.append('image', data.image)
			formData.append('info', JSON.stringify(dataWithoutImage))
			const res = await goalService.createGoal(formData)
			if (res?.status !== 200) throw new Error()
			return res
		},
		onSuccess: () => {
			toast.success('Успешно!')
			cb?.()
		},
	})
}

export function useGetGoals() {
	return useQuery({
		queryKey: ['get goals'],
		queryFn: async () => {
			const res = await goalService.getGoals()
			if (res?.status !== 200) throw new Error()
			return res
		},
		refetchOnWindowFocus: false,
		staleTime: Infinity,
	})
}

export function useCompleteSubGoal(id: number) {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async () => {
			const res = await goalService.completeSubGoal(id)
			if (res?.status !== 200) throw new Error()
			return res
		},
		onSuccess: () => {
			toast.success('Задача успешно выполнена!')
			queryClient.invalidateQueries({ queryKey: ['get goals'] })
		},
	})
}
export function useCompleteGoal(id: number) {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (image: File | undefined) => {
			if (!image) {
				toast.error('Выберите картинку')
				return
			}

			const formData = new FormData()
			formData.append('image', image)

			const res = await goalService.completeGoal(id, formData)
			if (res?.status !== 200) throw new Error()
			return res
		},
		onSuccess: () => {
			toast.success('Цель успешно выполнена!')
			queryClient.invalidateQueries({ queryKey: ['get goals'] })
		},
	})
}
