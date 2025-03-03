import { useState } from 'react'
import { HomeListItem } from './home-list-item'
import { Goal } from '../../types/goal'

export function HomeList() {
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
		<section className='mt-8'>
			<div className='relative w-full'>
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

			<div className='pt-10'>
				{goals.map((goal, index) => (
					<HomeListItem goal={goal} key={index} index={index + 1} />
				))}
			</div>
		</section>
	)
}
