import clsx from 'clsx'
import { SubGoal } from '../../types/goal'

interface Props {
	subGoal: SubGoal
	index: number
}

export function HomeSubGoal({ subGoal, index }: Props) {
	return (
		<tr
			className={clsx('border-b border-[#2F51A8]', {
				'border-t': index == 1,
			})}
		>
			<td className='font-light text-sm px-2 py-2 border border-[#2F51A8] w-10 h-10 text-center'>
				{index}
			</td>
			<td
				className='font-light text-sm px-2 py-2 border border-[#2F51A8]'
				style={{ wordBreak: 'break-word' }}
			>
				{subGoal.description}
			</td>
			<td className='font-light text-sm px-2 py-2 border border-[#2F51A8]'>
				до {Intl.DateTimeFormat().format(new Date(subGoal.deadline))}
			</td>
			<td className='font-light text-sm px-2 py-2 border border-[#2F51A8]'>
				<input type='checkbox' className='ml-auto checkbox' />
			</td>
		</tr>
	)
}
