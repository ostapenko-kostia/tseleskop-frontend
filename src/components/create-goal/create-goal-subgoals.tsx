import { UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { Block } from '../ui/block'
import { Button } from '../ui/button'
import { CheckIcon } from 'lucide-react'
import Popup from 'reactjs-popup'
import { useEffect, useState } from 'react'

export function CreateGoalSubGoal({
	watch,
	setValue,
}: {
	watch: UseFormWatch<any>
	setValue: UseFormSetValue<any>
}) {
	const [subGoalTemp, setSubGoalTemp] = useState<string>('')
	const [subGoalCreateOpen, setSubGoalCreateOpen] = useState<boolean>(false)

	useEffect(() => {
		setSubGoalCreateOpen(false)
	}, [watch('subGoals')])

	const handleAddSubGoal = () => {
		const value = watch('subGoals')
		if (value) {
			setValue('subGoals', [...value, { description: subGoalTemp }])
		} else {
			setValue('subGoals', [{ description: subGoalTemp }])
		}
		setSubGoalTemp('')
	}

	const handleRemoveSubGoal = (description: string) => {
		const value = watch('subGoals')?.filter(
			(goal: any) => goal.description !== description
		)
		setValue('subGoals', value)
	}

	return (
		<Block title='Перечень задач:'>
			<table className='w-full border-collapse border-t scale-95 border-[#2F51A8]'>
				<tbody>
					{watch('subGoals')?.map((goal: any, index: number) => (
						<tr key={index} className='border border-[#2F51A8]'>
							<td className='border border-[#2F51A8] px-4 py-2 text-center'>
								{index + 1}
							</td>
							<td className='border border-[#2F51A8] px-4 py-2'>
								{goal.description}
							</td>
							<td className='border border-[#2F51A8] px-4 py-2'>
								<button
									type='button'
									onClick={() => handleRemoveSubGoal(goal.description)}
								>
									-
								</button>
							</td>
						</tr>
					))}
					<tr>
						<td colSpan={3}>
							<Popup
								open={subGoalCreateOpen}
								onOpen={() => setSubGoalCreateOpen(true)}
								onClose={() => setSubGoalCreateOpen(false)}
								position='bottom left'
								arrow={false}
								trigger={
									<button
										type='button'
										className='bg-[#2F51A8] aspect-square px-2 text-white text-xl flex items-center justify-center'
									>
										+
									</button>
								}
							>
								<div className='w-full flex items-center gap-2'>
									<input
										type='text'
										className='outline-none w-full'
										placeholder='Введите описание'
										value={subGoalTemp ?? ''}
										onChange={e => setSubGoalTemp(e.target.value)}
									/>
									<Button
										type='button'
										onClick={handleAddSubGoal}
										className='aspect-square !p-2 rounded-sm'
									>
										<CheckIcon />
									</Button>
								</div>
							</Popup>
						</td>
					</tr>
				</tbody>
			</table>
		</Block>
	)
}
