import { api } from '../lib/axios'

class GoalService {
	async createGoal(data: any) {
		return await api.post(`/goal/create`, data)
	}
}

export const goalService = new GoalService()
