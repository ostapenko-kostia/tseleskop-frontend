import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { userService } from '../services/user.service'
import { useAuthStore } from '../store/auth.store'

export function useEditUser(cb?: () => void) {
	return useMutation({
		mutationFn: async ({
			id,
			data,
		}: {
			id: string
			data: {
				firstName?: string
				lastName?: string
				username?: string
				pin?: string
			}
		}) => {
			const res = await userService.editUser(id, data)
			if (!res.data) Promise.reject()
			return res
		},
		onSuccess: data => {
			toast.success('Успешно!')
			useAuthStore.setState({ user: data.data })
			cb?.()
		},
	})
}

export function useEditUserPhoto(cb?: () => void) {
	return useMutation({
		mutationFn: async ({
			id,
			data,
		}: {
			id: string
			data: {
				photo: FileList
			}
		}) => {
			const formData = new FormData()
			const file = data.photo.item(0)!

			const newFileName = file.name.toLowerCase().endsWith('.jpeg')
      ? file.name.replace(/\.jpeg$/i, '.jpg')
      : file.name;

    const newFile = new File([file], newFileName, { type: file.type });

			formData.append('image', newFile)
			const res = await userService.editUserPhoto(id, formData)
			if (!res.data) Promise.reject()
			return res
		},
		onSuccess: data => {
			toast.success('Успешно!')
			useAuthStore.setState({ user: data.data })
			cb?.()
		},
	})
}
