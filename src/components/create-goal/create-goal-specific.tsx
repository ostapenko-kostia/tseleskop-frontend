import { UseFormRegister } from 'react-hook-form'
import { Block } from '../ui/block'

export function CreateGoalSpecific({
	register,
}: {
	register: UseFormRegister<any>
}) {
	return (
		<Block
			titleSize={14}
			popup={<span>Например, увеличить прибыль своего предприятия.</span>}
			title='1. Specific (Конкретность) Объясни, что именно необходимо достигнуть?*'
		>
			<div className='w-full px-4'>
				<input
					{...register('specific')}
					required
					type='text'
					className='border-b-1 border-[#2F51A8] w-full outline-none'
				/>
			</div>
		</Block>
	)
}
