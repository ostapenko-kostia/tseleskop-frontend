import { HomeCreateGoal } from '../components/home/home-create-goal'
import { HomeList } from '../components/home/home-list'
import { HomeStatistics } from '../components/home/home-statistics'

export function HomePage() {
	return (
		<section
			className='h-screen overflow-y-auto'
			style={{
				background: 'linear-gradient(180deg, #FFFFFF 65.62%, #4982F6 100%)',
			}}
		>
			<HomeStatistics />
			<HomeList />
			<HomeCreateGoal className='fixed bottom-5 right-5 [&_button]:aspect-square [&_button]:p-0 [&_button]:w-16 text-4xl [&_button]:h-16 [&_button]:flex [&_button]:items-center [&_button]:justify-center' />
		</section>
	)
}
