export interface Goal { 
	id: number
	title: string
	description: string
	urgency: "low" | "average" | "high"
	deadline: Date
	subGoals?: SubGoal[]
	isDone: boolean
}

export interface SubGoal { 
	id: number
	title: string;
	fromDate: Date
	toDate: Date
	isDone: boolean
	goalId: number	
}