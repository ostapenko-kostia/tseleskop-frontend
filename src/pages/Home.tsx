import { Link } from 'react-router'
import { HomeCreateGoal } from '../components/home/home-create-goal'
import { HomeList } from '../components/home/home-list'
import { HomeStatistics } from '../components/home/home-statistics'
import { SettingsIcon } from 'lucide-react'

export function HomePage() {
	return (
		<section>
			<div className='px-4 flex items-end justify-between gap-1 w-full'>
				<h2 className='font-bold text-lg'>Статистика</h2>
				<Link to='/settings' className='flex flex-col gap-1 items-center mt-5'>
					<SettingsIcon color='#27448D' size={36} />
					<span className='text-xs'>Настройки</span>
				</Link>
			</div>
			<HomeStatistics />
			<HomeList />
			<HomeCreateGoal className='fixed bottom-5 right-5 [&_button]:aspect-square [&_button]:p-0 [&_button]:w-16 text-4xl [&_button]:h-16 [&_button]:flex [&_button]:items-center [&_button]:justify-center' />
		</section>
	)
}
