import { Goal } from '../../types/goal'
import { EditIcon } from '../icons/edit-icon'
import { Dialog } from '../ui/dialog'
import { HomeSubGoal } from './home-sub-goal'
import { HomeCompleteGoal } from './home-complete-goal'
import { CheckIcon } from 'lucide-react'

interface Props {
	goal: Goal
	index: number
}

export const URGENCY_COLORS = {
	low: '#F9F924',
	average: '#FA8E00',
	high: '#C61515',
}

export function HomeListItem({ goal, index }: Props) {
	const isSubGoalsCompleted = goal.subGoals?.every(
		subGoal => subGoal.isCompleted
	)

	const { isCompleted } = goal

	const isExpired =
		new Date(goal.deadline) <
		(goal.completedAt ? new Date(goal.completedAt) : new Date())

	const isSubGoalExpired = goal.subGoals?.some(
		subGoal =>
			new Date(subGoal.deadline) <
			(subGoal.completedAt ? new Date(subGoal.completedAt) : new Date())
	)

	return (
		<article className='flex w-full mb-4'>
			<div
				className='w-12 min-h-12 h-full text-white font-bold text-xl flex items-center justify-center'
				style={{
					background: isCompleted ? '#727473' : '#27448D',
				}}
			>
				{isCompleted ? <CheckIcon color='#000' /> : index}
			</div>
			<details className='w-full'>
				<summary
					className='text-white px-2 flex items-center py-0.5 text-lg appearance-none max-[370px]:text-sm'
					style={{
						background: isCompleted
							? 'linear-gradient(90deg, #727473 63%, #020202 100%)'
							: isSubGoalExpired || isExpired
							? 'linear-gradient(90deg, #C61515 61.5%, #600A0A 100%)'
							: isSubGoalsCompleted
							? 'linear-gradient(90deg, #50AE1B 53%, #21480B 100%)'
							: '#27448D',
					}}
				>
					{goal.title}
				</summary>
				<div className='relative p-[3px] rounded-xl'>
					<div
						className='absolute inset-0 rounded-b-lg'
						style={{
							background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
						}}
					/>

					<div className='relative bg-white rounded-b-md p-2'>
						<div className='flex gap-1 items-center'>
							<h3 className='text-sm font-bold'>Описание:</h3>
							<span className='w-full text-xs whitespace-pre-wrap	'>
								{goal.description}
							</span>
							<Dialog
								title='Для подтверждении цели приложите фото'
								trigger={
									<input
										disabled={!isSubGoalsCompleted || goal.isCompleted}
										checked={goal.isCompleted}
										readOnly
										type='checkbox'
										className='checkbox scale-125'
										style={{
											borderColor: !isSubGoalsCompleted ? '#aaa' : '#00cc00',
										}}
									/>
								}
							>
								<HomeCompleteGoal goalId={goal.id} />
							</Dialog>
						</div>
						<div className='text-xs w-min ml-auto mt-2 bg-[#727473] text-white text-nowrap rounded-md px-4 py-1'>
							до {Intl.DateTimeFormat().format(new Date(goal.deadline))}
						</div>
						<img
							src={goal.imageUrl}
							alt={goal.title}
							className='w-1/2 mx-auto my-2 aspect-square object-cover'
						/>
						<table className='w-full mt-2 border-collapse border border-[#2F51A8]'>
							<tbody>
								{goal.subGoals?.map((subGoal, i) => (
									<HomeSubGoal key={i} subGoal={subGoal} index={i + 1} />
								))}
							</tbody>
						</table>
						<EditIcon className='mr-auto mt-3' />
					</div>
				</div>
			</details>
			<div
				className='w-14 mr-2 h-[32px]'
				style={{
					backgroundColor:
						URGENCY_COLORS[
							goal.urgencyLevel.toLowerCase() as keyof typeof URGENCY_COLORS
						],
				}}
			/>
		</article>
	)
}
