import { useState } from 'react'
import { HomeListItem, URGENCY_COLORS } from './home-list-item'
import { Goal } from '../../types/goal'
import { MenuIcon } from 'lucide-react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import clsx from 'clsx'

export function HomeList() {
	const [urgencyLevel, setUrgencyLevel] = useState<
		'all' | 'low' | 'average' | 'high'
	>('all')
	const [goals] = useState<Goal[]>([
		{
			id: 1,
			title: 'Похудеть к лету 2025 года',
			description: 'абтаоты ыва тцтушоат щцтуатлц ут латлцутазлзлбл',
			urgency: 'high',
			deadline: new Date('2025-08-25'),
			isDone: false,
			subGoals: [
				{
					id: 1,
					title: 'Записаться в зал в Январе',
					fromDate: new Date('2025-01-15'),
					toDate: new Date('2025-01-25'),
					isDone: false,
					goalId: 1,
				},
				{
					id: 2,
					title: 'Найти тренера',
					fromDate: new Date('2025-01-26'),
					toDate: new Date('2025-02-02'),
					isDone: false,
					goalId: 1,
				},
				{
					id: 3,
					title: 'Создать программу тренировок',
					fromDate: new Date('2025-02-05'),
					toDate: new Date('2025-02-15'),
					isDone: false,
					goalId: 1,
				},
			],
		},
		{
			id: 1,
			title: 'Похудеть к лету 2025 года',
			description: 'абтаоты ыва тцтушоат щцтуатлц ут латлцутазлзлбл',
			urgency: 'average',
			deadline: new Date('2025-08-25'),
			isDone: false,
			subGoals: [
				{
					id: 1,
					title: 'Записаться в зал в Январе',
					fromDate: new Date('2025-01-15'),
					toDate: new Date('2025-01-25'),
					isDone: false,
					goalId: 1,
				},
				{
					id: 2,
					title: 'Найти тренера',
					fromDate: new Date('2025-01-26'),
					toDate: new Date('2025-02-02'),
					isDone: false,
					goalId: 1,
				},
				{
					id: 3,
					title: 'Создать программу тренировок',
					fromDate: new Date('2025-02-05'),
					toDate: new Date('2025-02-15'),
					isDone: false,
					goalId: 1,
				},
			],
		},
		{
			id: 1,
			title: 'Похудеть к лету 2025 года',
			description: 'абтаоты ыва тцтушоат щцтуатлц ут латлцутазлзлбл',
			urgency: 'low',
			deadline: new Date('2025-08-25'),
			isDone: false,
			subGoals: [
				{
					id: 1,
					title: 'Записаться в зал в Январе',
					fromDate: new Date('2025-01-15'),
					toDate: new Date('2025-01-25'),
					isDone: false,
					goalId: 1,
				},
				{
					id: 2,
					title: 'Найти тренера',
					fromDate: new Date('2025-01-26'),
					toDate: new Date('2025-02-02'),
					isDone: false,
					goalId: 1,
				},
				{
					id: 3,
					title: 'Создать программу тренировок',
					fromDate: new Date('2025-02-05'),
					toDate: new Date('2025-02-15'),
					isDone: false,
					goalId: 1,
				},
			],
		},
	])
	return (
		<section className='pt-8'>
			<div className='relative w-full mb-10'>
				<h2 className='font-bold text-xl uppercase absolute left-1/2 top-1/2 -translate-y-1/2 bg-white z-10 px-3 text-nowrap -translate-x-1/2'>
					Перечень целей
				</h2>
				<hr
					className='w-full absolute top-0 left-0 inset-0'
					style={{
						background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
					}}
				/>
			</div>

			<div className='flex items-center w-full h-8'>
				<div
					className='w-12 text-xl h-full text-center text-white'
					style={{
						background: 'linear-gradient(180deg, #2F51A8 0%, #122042 100%)',
					}}
				>
					№
				</div>
				<div className='border-t-2 w-full border-[#2F51A8] h-full pl-3 flex items-center max-[340px]:text-sm'>
					Название и описание целей
				</div>
				<Popup
					position='bottom center'
					contentStyle={{
						border: '2px solid #2F51A8',
						borderEndEndRadius: '10px',
						borderEndStartRadius: '10px',
						width: '55px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '5px',
					}}
					arrow={false}
					trigger={
						<div
							className='w-16 h-full text-xl relative text-white flex items-center p-1'
							style={{
								background: 'linear-gradient(180deg, #2F51A8 0%, #122042 100%)',
							}}
						>
							lvl <MenuIcon className='absolute right-0.5 top-0.5' size={16} />
						</div>
					}
				>
					<button
						onClick={() =>
							setUrgencyLevel(prev => (prev === 'low' ? 'all' : 'low'))
						}
						className={clsx('w-6 aspect-square rounded-full', {
							'border-2 border-[#2F51A8]': urgencyLevel === 'low',
						})}
						style={{ backgroundColor: URGENCY_COLORS['low'] }}
					/>
					<button
						onClick={() =>
							setUrgencyLevel(prev => (prev === 'average' ? 'all' : 'average'))
						}
						className={clsx('w-6 aspect-square rounded-full', {
							'border-2 border-[#2F51A8]': urgencyLevel === 'average',
						})}
						style={{ backgroundColor: URGENCY_COLORS['average'] }}
					/>
					<button
						onClick={() =>
							setUrgencyLevel(prev => (prev === 'high' ? 'all' : 'high'))
						}
						className={clsx('w-6 aspect-square rounded-full', {
							'border-2 border-[#2F51A8]': urgencyLevel === 'high',
						})}
						style={{ backgroundColor: URGENCY_COLORS['high'] }}
					/>
				</Popup>
			</div>

			<div>
				{goals
					.filter(
						goal => urgencyLevel === 'all' || goal.urgency === urgencyLevel
					)
					.map((goal, index) => (
						<HomeListItem goal={goal} key={index} index={index + 1} />
					))}
			</div>
		</section>
	)
}
