import { api } from '../lib/axios'
import { IUser } from '../types/user'

class UserService {
	async editUser(
		id: number,
		data: {
			firstName?: string
			lastName?: string
			pin?: string
			username?: string
		}
	) {
		return await api.put<IUser>(`/user/edit/${id}`, data)
	}
}

export const userService = new UserService()
