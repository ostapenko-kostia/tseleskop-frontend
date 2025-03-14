import { Link } from 'react-router'
import { HomeIcon } from '../components/icons/home-icon'
import { Block } from '../components/ui/block'
import { Button } from '../components/ui/button'
import { URGENCY_COLORS } from '../components/home/home-list-item'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Popup from 'reactjs-popup'
import { CheckIcon } from 'lucide-react'

export function CreateGoal() {
	const [urgencyLevel, setUrgencyLevel] = useState<'low' | 'average' | 'high'>(
		'low'
	)

	const [subGoalTemp, setSubGoalTemp] = useState<string>('')
	const [subGoalCreateOpen, setSubGoalCreateOpen] = useState<boolean>(false)

	const [subGoals, setSubGoals] = useState<
		{ id: number; description: string }[]
	>([
		{ description: 'блабалбаллаблаблаблалалблаблбьа', id: 1 },
		{ description: 'блабалбаллаблаблаблалалблаблбьа', id: 2 },
	])

	useEffect(() => {
		setSubGoalCreateOpen(false)
		console.log(subGoalCreateOpen)
	}, [subGoals])

	const handleAddSubGoal = () => {
		setSubGoals(prev => [
			...prev,
			{ id: subGoals.length + 1, description: subGoalTemp },
		])
		setSubGoalTemp('')
	}

	const handleRemoveSubGoal = (id: number) => {
		setSubGoals(prev => prev.filter(goal => goal.id !== id))
	}

	return (
		<section className='relative pb-4'>
			<Link to='/' className='p-3 flex justify-end'>
				<HomeIcon />
			</Link>

			<div className='mt-2'>
				<hr
					style={{
						background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
					}}
				/>
				<h1 className='text-center my-2 font-semibold text-2xl'>
					Создание цели
				</h1>
				<hr
					style={{
						background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
					}}
				/>
			</div>

			<section className='px-4 pt-5 flex flex-col gap-5 w-full'>
				<Block title='Название цели'>
					<div className='w-full px-4'>
						<input
							type='text'
							className='border-b-1 border-[#2F51A8] w-full outline-none'
						/>
					</div>
				</Block>

				<Block title='Важность цели'>
					<div className='flex items-center gap-4 flex-wrap justify-center'>
						<div className='flex items-center gap-2'>
							<button
								onClick={() => setUrgencyLevel('low')}
								className={clsx(
									'w-10 max-[400px]:w-6 aspect-square rounded-full',
									{
										'border-2 border-[#2F51A8]': urgencyLevel === 'low',
									}
								)}
								style={{ backgroundColor: URGENCY_COLORS['low'] }}
							/>{' '}
							<span className='text-sm'>Желаймая</span>
						</div>
						<div className='flex items-center gap-2'>
							<button
								onClick={() => setUrgencyLevel('average')}
								className={clsx(
									'w-10 max-[400px]:w-6 aspect-square rounded-full',
									{
										'border-2 border-[#2F51A8]': urgencyLevel === 'average',
									}
								)}
								style={{ backgroundColor: URGENCY_COLORS['average'] }}
							/>{' '}
							<span className='text-sm'>Нужная</span>
						</div>
						<div className='flex items-center gap-2'>
							<button
								onClick={() => setUrgencyLevel('high')}
								className={clsx(
									'w-10 max-[400px]:w-6 aspect-square rounded-full',
									{
										'border-2 border-[#2F51A8]': urgencyLevel === 'high',
									}
								)}
								style={{ backgroundColor: URGENCY_COLORS['high'] }}
							/>{' '}
							<span className='text-sm'>Важная</span>
						</div>
					</div>
				</Block>
			</section>

			<div className='bg-[#27448D] my-5 py-0.5 text-center text-white text-lg text-semibold'>
				<span>Описание цели</span>
			</div>

			<section className='flex flex-col gap-5 px-4'>
				<Block
					titleSize={14}
					title='1. Specific (Конкретность) Объясни, что именно необходимо достигнуть?*'
				>
					<div className='w-full px-4'>
						<input
							type='text'
							className='border-b-1 border-[#2F51A8] w-full outline-none'
						/>
					</div>
				</Block>

				<Block
					titleSize={14}
					title='2. Measurable (Измеримость) Объясни, в чем будет измеряться результат?*'
				>
					<div className='w-full px-4'>
						<input
							type='text'
							className='border-b-1 border-[#2F51A8] w-full outline-none'
						/>
					</div>
				</Block>

				<Block
					titleSize={14}
					title='3. Attainable (Достижимость) Объясни, за счет чего планируется достигнуть цели?*'
				>
					<div className='w-full px-4'>
						<input
							type='text'
							className='border-b-1 border-[#2F51A8] w-full outline-none'
						/>
					</div>
				</Block>

				<Block
					titleSize={14}
					title='4. Relevant (Актуальность) Действительно ли выполнение данной задачи позволит достичь желаемой цели?*'
				>
					<div className='w-full px-4'>
						<input
							type='text'
							className='border-b-1 border-[#2F51A8] w-full outline-none'
						/>
					</div>
				</Block>

				<Block title='Полное описание цели:'>
					<div className='w-full px-4'>
						<textarea className='border-b-1 border-[#2F51A8] w-full outline-none resize-none' />
					</div>
				</Block>

				<Block title='Срок выполнение цели*'>
					<div className='w-full px-4 flex items-center gap-4 justify-center flex-wrap'>
						<div className='flex items-center gap-2 text-sm'>
							<input
								name='deadline'
								type='radio'
								id='3-months'
								defaultChecked
								className='w-6 h-6 accent-black'
							/>
							<label htmlFor='3-months'>3 месяца</label>
						</div>
						<div className='flex items-center gap-2 text-sm'>
							<input
								name='deadline'
								type='radio'
								id='6-months'
								className='w-6 h-6 accent-black'
							/>
							<label htmlFor='6-months'>6 месяца</label>
						</div>
						<div className='flex items-center gap-2 text-sm'>
							<input
								name='deadline'
								type='radio'
								id='1-year'
								className='w-6 h-6 accent-black'
							/>
							<label htmlFor='1-year'>1 год</label>
						</div>
					</div>
				</Block>

				<Block title='Перечень задач:'>
					<table className='w-full border-collapse border-t scale-95 border-[#2F51A8]'>
						<tbody>
							{subGoals.map(goal => (
								<tr key={goal.id} className='border border-[#2F51A8]'>
									<td className='border border-[#2F51A8] px-4 py-2 text-center'>
										{goal.id}
									</td>
									<td className='border border-[#2F51A8] px-4 py-2'>
										{goal.description}
									</td>
									<td className='border border-[#2F51A8] px-4 py-2'>
										<button onClick={() => handleRemoveSubGoal(goal.id)}>
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
											<button className='bg-[#2F51A8] aspect-square px-2 text-white text-xl flex items-center justify-center'>
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

				<Block title='Награда за выполнение цели'>
					<div className='w-full px-4'>
						<input
							type='text'
							className='border-b-1 border-[#2F51A8] w-full outline-none'
						/>
					</div>
				</Block>

				<Block title='Хотите ли транслировать выполнение цели друзьям?'>
					<div className='w-full px-4 flex items-center gap-4 justify-center flex-wrap'>
						<div className='flex items-center gap-2 text-sm'>
							<input
								name='privacy'
								type='radio'
								id='private'
								defaultChecked
								className='w-6 h-6 accent-black'
							/>
							<label htmlFor='private'>Личная</label>
						</div>
						<div className='flex items-center gap-2 text-sm'>
							<input
								name='privacy'
								type='radio'
								id='public'
								className='w-6 h-6 accent-black'
							/>
							<label htmlFor='public'>Открытая</label>
						</div>
					</div>
				</Block>
			</section>

			<div className='flex justify-end px-4'>
				<Button className='ml-auto mt-5'>Готово</Button>
			</div>
		</section>
	)
}
