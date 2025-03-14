import { PropsWithChildren } from 'react'

export function Block({
	title,
	titleSize,
	children,
}: PropsWithChildren<{ title: string; titleSize?: number }>) {
	return (
		<div className='w-full'>
			<div
				className='rounded-t-lg text-white py-0.5 px-1 font-semibold text-center'
				style={{
					background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
					fontSize: titleSize
				}}
			>
				{title}
			</div>
			<div className='relative p-[3px] rounded-xl'>
				<div
					className='absolute inset-0 rounded-b-lg'
					style={{
						background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
					}}
				/>

				<div className='relative bg-white flex items-center justify-center rounded-b-md py-4'>
					{children}
				</div>
			</div>
		</div>
	)
}
