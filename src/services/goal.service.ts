import { api } from '../lib/axios'

class GoalService {
	async createGoal(data: any) {
		return await api.post(`/goal/create`, data)
	}

	async getGoals() {
		return await api.get('/goal')
	}

	async completeSubGoal(id: number) {
		return await api.post(`/goal/sub-goal/${id}/complete`)
	}
}

export const goalService = new GoalService()
