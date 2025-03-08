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

	async getUser(id: string) {
		return await api.get<IUser>(`/user/${id}`)
	}
}

export const userService = new UserService()
