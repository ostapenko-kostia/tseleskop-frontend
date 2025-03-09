import { useEffect, useState } from 'react'
import { Button } from '../components/ui/button'
import {
	RegisterTitle,
	RegisterUserInfo,
	RegisterAgreements,
	RegisterPin,
	RegisterUsername,
} from '../components/register'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'
import { useInitData } from '../hooks/useInitData'
import { userService } from '../services/user.service'
import { LoaderIcon } from 'lucide-react'

export function RegisterPage() {
	const navigate = useNavigate()
	const initData = useInitData()

	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		const checkUserExists = async () => {
			setIsLoading(true)
			const user = await userService.getUser(
				initData?.user?.id.toString() || ''
			)
			if (user.data) navigate('/login')
			setIsLoading(false)
		}

		checkUserExists()
	}, [initData])

	const [personalDataAgreement, setPersonalDataAgreement] =
		useState<boolean>(true)

	const [pin, setPin] = useState<string>('')

	const [privacyPolicyAgreement, setPrivacyPolicyAgreement] =
		useState<boolean>(true)

	const { mutate, isPending } = useAuth(() =>
		setTimeout(() => {
			navigate('/')
		}, 1000)
	)

	const auth = () => {
		if (initData && pin.length === 4) mutate({ initData, pin })
	}

	return !isLoading ? (
		<section className='py-6'>
			<RegisterTitle />
			<RegisterUserInfo user={initData?.user} />
			<RegisterUsername user={initData?.user} />
			<RegisterAgreements
				personalDataAgreement={personalDataAgreement}
				setPersonalDataAgreement={setPersonalDataAgreement}
				privacyPolicyAgreement={privacyPolicyAgreement}
				setPrivacyPolicyAgreement={setPrivacyPolicyAgreement}
			/>
			<RegisterPin setPin={setPin} />

			<div className='flex w-full justify-center'>
				<Button
					onClick={auth}
					className='mt-10'
					disabled={
						pin.trim().length !== 4 ||
						!privacyPolicyAgreement ||
						!personalDataAgreement ||
						isPending
					}
				>
					Далее
				</Button>
			</div>
		</section>
	) : (
		<section className='overflow-y-auto fixed flex items-center gap-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<LoaderIcon className='animate-spin' />
			<span>Загрузка...</span>
		</section>
	)
}
