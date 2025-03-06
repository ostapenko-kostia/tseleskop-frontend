import { useState } from 'react'
import { Button } from '../components/ui/button'
import {
	RegisterTitle,
	RegisterUserInfo,
	RegisterAgreements,
	RegisterPin,
	RegisterUsername,
} from '../components/register'
import { useAuth } from '../hooks/useAuth'
import { InitData, parseInitDataQuery } from '@telegram-apps/sdk'
import { useNavigate } from 'react-router'

export function RegisterPage() {
	const navigate = useNavigate()
	const initData: InitData = parseInitDataQuery(window.Telegram.WebApp.initData)
	// const initData = parseInitDataQuery(
	// 	'user=%7B%22id%22%3A972463296%2C%22first_name%22%3A%22Kostiantyn%22%2C%22last_name%22%3A%22Ostapenko%22%2C%22username%22%3A%22khos_streks%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FN8qN5oTwZaHGgex5vOSTFbag_ooKVsq2rRyYRU2mJIU.svg%22%7D&chat_instance=-1083919207776517697&chat_type=sender&auth_date=1741257541&signature=ybxo1IICjrOabGiS90a-9XkiMEpjSZgZZzEOjWpVVmtoB70jLfMto3mw0Rzxd55iuqR4iuMNq3Zhcb43XNuJCg&hash=8235b76f4848b10299011ebe31b4154d6e6523c99e780026f95518cc38a228d4'
	// )

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

	return (
		<section
			className='h-screen overflow-y-auto py-6'
			style={{
				background: 'linear-gradient(180deg, #FFFFFF 65.62%, #4982F6 100%)',
			}}
		>
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
	)
}
