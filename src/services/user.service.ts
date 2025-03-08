import { api } from '../lib/axios'
import { IUser } from '../types/user'

class UserService {
	async editUser(
		id: string,
		data: {
			firstName?: string
			lastName?: string
			pin?: string
			username?: string
		}
	) {
		return await api.put<IUser>(`/user/edit/${id}`, data)
	}

	async editUserPhoto(id: string, formData: FormData) {
		 alert((formData.get('image') as File).name)
		return await api.put<IUser>(`/user/edit-photo/${id}`, formData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	}

	async getUser(id: string) {
		return await api.get<IUser>(`/user/${id}`)
	}
}

export const userService = new UserService()
