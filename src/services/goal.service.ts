import { api } from '../lib/axios'

class GoalService {
	async createGoal(data: any) {
		return await api.post(`/goal/create`, data)
	}

	async getGoals() {
		return await api.get('/goal')
	}
}

export const goalService = new GoalService()
