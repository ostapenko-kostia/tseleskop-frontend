import { useNavigate } from 'react-router'

export function HelloPage() {
	const navigate = useNavigate()

	const handleClick = () => {
		sessionStorage.setItem('helloShown', 'true')
		navigate('/')
	}
	return (
		<section
			className='h-screen overflow-y-auto py-6 flex items-center'
			style={{
				background: 'linear-gradient(180deg, #FFFFFF 75%, #4982F6 100%)',
			}}
		>
			<div>
				<button onClick={handleClick}>
					<img src='/logo.png' alt='Целескоп' className='w-1/2 mx-auto' />
				</button>
				<h1 className='font-bold text-3xl text-center mt-5'>Целескоп</h1>
			</div>
		</section>
	)
}
