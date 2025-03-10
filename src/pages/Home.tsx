import { Link } from 'react-router'
import { HomeCreateGoal } from '../components/home/home-create-goal'
import { HomeList } from '../components/home/home-list'
import { HomeStatistics } from '../components/home/home-statistics'
import { SettingsIcon } from 'lucide-react'

export function HomePage() {
	return (
		<section>
			<div className='px-4 flex items-center justify-between gap-3 w-full'>
				<HomeStatistics />
				<Link to='/settings' className='flex flex-col gap-1 items-center'>
					<SettingsIcon color='#27448D' size={48} />
					<span>Настройки</span>
				</Link>
			</div>
			<HomeList />
			<HomeCreateGoal className='fixed bottom-5 right-5 [&_button]:aspect-square [&_button]:p-0 [&_button]:w-16 text-4xl [&_button]:h-16 [&_button]:flex [&_button]:items-center [&_button]:justify-center' />
		</section>
	)
}
