import { Goal } from '../../types/goal'
import { EditIcon } from '../icons/edit-icon'
import { HomeSubGoal } from './home-sub-goal'

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
	return (
		<article className='flex items-start w-full'>
			<div className='w-12 aspect-square h-12 bg-[#27448D] text-white font-bold text-xl flex items-center justify-center'>
				{index}
			</div>
			<details className='w-full'>
				<summary className='text-white px-2 py-0.5 text-lg appearance-none bg-[#27448D]'>
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
							<span className='w-full text-xs'>{goal.description}</span>
							<input
								type='checkbox'
								className='checkbox !border-green-500 scale-125'
							/>
						</div>
						<div className='text-xs w-min ml-auto mt-2 bg-[#727473] text-white text-nowrap rounded-md px-4 py-1'>
							до {Intl.DateTimeFormat().format(goal.deadline)}
						</div>
						<div className='mt-2'>
							{goal.subGoals?.map((subGoal, i) => (
								<HomeSubGoal key={i} subGoal={subGoal} index={i + 1} />
							))}
						</div>
						<EditIcon className='mr-auto mt-3' />
					</div>
				</div>
			</details>
			<div
				className='w-14 mr-8 h-[32px]'
				style={{
					backgroundColor: URGENCY_COLORS[goal.urgency],
				}}
			/>
		</article>
	)
}
