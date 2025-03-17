import toast from 'react-hot-toast'
import { api } from '../lib/axios'

class FriendshipService {
	async createFriendship(inviteId: string) {
		const res = await api.post('/friendship/add', { inviteId })
		if (res.status === 200) toast.success('Друг успешно добавлен!')
		return res
	}
}

export const friendshipService = new FriendshipService()
