export interface Goal { 
	id: number
	title: string
	description: string
	urgencyLevel: "low" | "average" | "high"
	deadline: Date
	subGoals?: SubGoal[]
	isDone: boolean
}

export interface SubGoal { 
	id: number
	description: string;
	deadline: Date
	isCompleted: boolean
	goalId: number	
}