import { useEffect, useState } from 'react'
import { Button } from '../components/ui/button'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'
import {
	LoginTitle,
	LoginPin,
	LoginUserInfo,
	LoginUsername,
} from '../components/login'
import { useInitData } from '../hooks/useInitData'
import { userService } from '../services/user.service'
import { IUser } from '../types/user'
import { LoaderIcon } from 'lucide-react'

export function LoginPage() {
	const navigate = useNavigate()
	const initData = useInitData()

	const [pin, setPin] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [user, setUser] = useState<IUser | null>(null)

	useEffect(() => {
		const checkUserExists = async () => {
			setIsLoading(true)
			const user = await userService.getUser(
				initData?.user?.id.toString() || ''
			)
			if (!user.data) navigate('/register')
			else setUser(user.data)
			setIsLoading(false)
		}

		checkUserExists()
	}, [initData])

	const { mutate, isPending } = useAuth(() =>
		setTimeout(() => {
			navigate('/')
		}, 1000)
	)

	const auth = () => {
		if (initData && pin.length === 4) mutate({ initData, pin })
	}

	return !isLoading ? (
		<section
			className='h-screen overflow-y-auto py-6'
			style={{
				background: 'linear-gradient(180deg, #FFFFFF 65.62%, #4982F6 100%)',
			}}
		>
			<LoginTitle />
			<LoginUserInfo
				photoUrl={user?.photoUrl ?? initData?.user?.photo_url}
				firstName={user?.firstName ?? initData?.user?.first_name}
				lastName={user?.lastName ?? initData?.user?.last_name}
			/>
			<LoginUsername userName={user?.username ?? initData?.user?.username} />
			<LoginPin setPin={setPin} />

			<div className='flex w-full justify-center'>
				<Button
					onClick={auth}
					className='mt-10'
					disabled={pin.trim().length !== 4 || isPending}
				>
					Далее
				</Button>
			</div>
		</section>
	) : (
		<section className='h-screen overflow-y-auto py-6 flex items-center justify-center flex-col gap-4'>
			<LoaderIcon className='animate-spin' />
			<span>Загрузка...</span>
		</section>
	)
}
