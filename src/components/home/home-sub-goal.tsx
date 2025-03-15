import clsx from 'clsx'
import { SubGoal } from '../../types/goal'

interface Props {
	subGoal: SubGoal
	index: number
}

export function HomeSubGoal({ subGoal, index }: Props) {
	return (
		<article
			className={clsx(
				'flex items-center justify-between w-full border-b border-[#2F51A8]',
				{
					'border-t': index == 1,
				}
			)}
		>
			<div className='font-light text-sm pr-1 py-2'>
				{index}. {subGoal.description}
			</div>
			<div className='flex items-center gap-1 border-l border-[#2F51A8]'>
				<span className='text-xs py-2 pl-3'>
					до {Intl.DateTimeFormat().format(new Date(subGoal.deadline))}
				</span>
				<input type='checkbox' className='ml-auto checkbox' />
			</div>
		</article>
	)
}
