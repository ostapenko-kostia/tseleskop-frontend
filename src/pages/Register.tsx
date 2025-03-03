import { useCallback, useState } from 'react'
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
	const { tgWebAppData } = retrieveLaunchParams()
	const user = tgWebAppData?.user

	const [personalDataAgreement, setPersonalDataAgreement] =
		useState<boolean>(true)

	const [privacyPolicyAgreement, setPrivacyPolicyAgreement] =
		useState<boolean>(true)

	const [pin, setPin] = useState<string>('')
	const { mutate, isPending } = useAuth()

	const auth = useCallback(() => {
		if (
			user?.first_name &&
			user?.last_name &&
			user?.id &&
			user?.username &&
			user?.photo_url
		) {
			mutate({ pin, hash: tgWebAppData?.hash, ...user })
		}

		console.log(tgWebAppData)
	}, [])

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
						!pin.trim().length ||
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
