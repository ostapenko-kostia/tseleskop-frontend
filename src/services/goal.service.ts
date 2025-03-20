import { api } from '../lib/axios'

class GoalService {
	async createGoal(formData: FormData) {
		return await api.post(`/goal/create`, formData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	}

	async getGoals() {
		return await api.get('/goal')
	}

	async completeSubGoal(id: number) {
		return await api.post(`/goal/sub-goal/${id}/complete`)
	}

	async completeGoal(id: number, formData: FormData) {
		return await api.post(`/goal/${id}/complete`, formData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})
	}
}

export const goalService = new GoalService()
