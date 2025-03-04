import { useState } from 'react'
import { Button } from '../components/ui/button'
import { retrieveLaunchParams } from '@telegram-apps/sdk'
import {
	RegisterTitle,
	RegisterUserInfo,
	RegisterAgreements,
	RegisterPin,
	RegisterUsername,
} from '../components/register'
import { useAuth } from '../hooks/useAuth'

export function RegisterPage() {
	const { tgWebAppData: initData } = retrieveLaunchParams()
	const [personalDataAgreement, setPersonalDataAgreement] =
		useState<boolean>(true)

	const [privacyPolicyAgreement, setPrivacyPolicyAgreement] =
		useState<boolean>(true)

	const [pin, setPin] = useState<string>('')
	const { mutate, isPending } = useAuth()

	const auth = () => {
		console.log(initData)
		console.log(pin)
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
			<RegisterUserInfo />
			<RegisterUsername />
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
