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
import { retrieveLaunchParams } from '@telegram-apps/sdk'

export function RegisterPage() {
	const { tgWebAppData: initData } = retrieveLaunchParams()

	// const initData =
	// 	'user=%7B%22id%22%3A5056024242%2C%22first_name%22%3A%22%3C%5C%2Fabeke%3E%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22abylaikak%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FAj3hfrbNq8PfLLKvsSp3-WizcXTc3HO8Vynsw3R1a1A5spK3fDmZERABNoOGLEQN.svg%22%7D&chat_instance=-4908992446394523843&chat_type=private&auth_date=1735556539&signature=pgNJfzcxYGAcJCJ_jnsYEsmiTJJxOP2tNKb941-fT7QcsUQ2chSkFcItG8KvjR_r3nH0vem4bxtlltuyX-IwBQ&hash=c0b510163f5b1dea53172644df35e63458216a9d5d9a10413af4f5b0204bb493'

	const [personalDataAgreement, setPersonalDataAgreement] =
		useState<boolean>(true)

	const [privacyPolicyAgreement, setPrivacyPolicyAgreement] =
		useState<boolean>(true)

	const [pin, setPin] = useState<string>('')
	const { mutate, isPending } = useAuth()

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
