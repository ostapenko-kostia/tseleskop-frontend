import { InitData } from '@telegram-apps/sdk'

export function RegisterUserInfo({ user }: { user: InitData['user'] }) {
	return (
		<div className='py-8 px-4 flex items-center gap-5 max-[330px]:gap-3'>
			<img
				className='w-[80px] h-[80px] aspect-square rounded-full'
				src={user?.photo_url}
			/>
			<div className='flex flex-col'>
				<h2 className='font-bold text-xl'>
					{user?.last_name} {user?.first_name}
				</h2>
				<ul className='text-sm flex items-center gap-4 max-[351px]:gap-2 max-[351px]:text-[13px]'>
					<li>
						<a href='#'>Сменить ФИО</a>
					</li>
					<li className='list-["|"] list-outside pl-2 max-[351px]:pl-1'>
						<a href='#'>Сменить Фото</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
