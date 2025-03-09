import { useNavigate } from 'react-router'

export function HelloPage() {
	const navigate = useNavigate()

	const handleClick = () => {
		sessionStorage.setItem('helloShown', 'true')
		navigate('/login')
	}
	return (
		<section className='overflow-y-auto py fixed top-1/2 -translate-y-1/2 flex items-center'>
			<div>
				<button onClick={handleClick}>
					<img src='/logo.png' alt='Целескоп' className='w-1/2 mx-auto' />
				</button>
				<h1 className='font-bold text-3xl text-center mt-5'>Целескоп</h1>
			</div>
		</section>
	)
}
