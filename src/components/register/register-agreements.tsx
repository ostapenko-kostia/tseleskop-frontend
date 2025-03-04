import Switch from '../ui/switch'

interface Props {
	personalDataAgreement: boolean
	setPersonalDataAgreement: (checked: boolean) => void
	privacyPolicyAgreement: boolean
	setPrivacyPolicyAgreement: (checked: boolean) => void
}

export function RegisterAgreements({
	personalDataAgreement,
	setPersonalDataAgreement,
	privacyPolicyAgreement,
	setPrivacyPolicyAgreement,
}: Props) {
	return (
		<div className='flex flex-col px-3 gap-6 mt-12'>
			<div className='relative p-[3px] rounded-xl'>
				<div
					className='absolute inset-0 rounded-lg'
					style={{
						background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
					}}
				/>
				<div className='relative bg-white flex items-center justify-between rounded-md py-1.5 px-3'>
					<a href='#' className='underline text-sm'>
						Согласие на обработку персональных данных*
					</a>
					<Switch
						className='scale-120'
						checked={personalDataAgreement}
						onChange={setPersonalDataAgreement}
					/>
				</div>
			</div>
			<div className='relative p-[3px] rounded-xl'>
				<div
					className='absolute inset-0 rounded-lg'
					style={{
						background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
					}}
				/>
				<div className='relative bg-white flex items-center justify-between rounded-md py-1.5 px-3'>
					<a href='#' className='underline text-sm'>
						Политика конфиденциальности*
					</a>
					<Switch
						className='scale-120'
						checked={privacyPolicyAgreement}
						onChange={setPrivacyPolicyAgreement}
					/>
				</div>
			</div>
		</div>
	)
}
