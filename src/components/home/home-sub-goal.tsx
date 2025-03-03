import clsx from 'clsx'
import { SubGoal } from '../../types/goal'

interface Props {
	subGoal: SubGoal
	index: number
}

export function HomeSubGoal({ subGoal, index }: Props) {
	return (
		<article
			className={clsx('grid grid-cols-2 w-full border-b border-[#2F51A8]', {
				'border-t': index == 1,
			})}
		>
			<div className='font-light text-sm pr-1 border-r border-[#2F51A8]'>
				{index}. {subGoal.title}
			</div>
			<div className='pl-1 flex items-center gap-1'>
				<div>
					<span className='text-xs'>
						{Intl.DateTimeFormat().format(subGoal.fromDate)}
					</span>
					{' - '}
					<span className='text-xs'>
						{Intl.DateTimeFormat().format(subGoal.fromDate)}
					</span>
				</div>
				<input type='checkbox' className='ml-auto checkbox' />
			</div>
		</article>
	)
}
