export function HomeStatistics() {
	return (
		<section className='px-3 pt-5 font-bold text-lg'>
			<h2>Статистика</h2>
			<div className='relative p-[3px] rounded-xl'>
				<div
					className='absolute inset-0 rounded-lg'
					style={{
						background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
					}}
				/>
				<div className='relative bg-white grid grid-cols-2 grid-rows-2 rounded-md'>
					<div className='border-b-2 border-r-2 border-[#2F51A8] flex items-center justify-center px-3 py-7'>
						<span className='text-lg font-normal text-nowrap'>
							Всего целей: <span className='font-bold'>100</span>
						</span>
					</div>
					<div className='border-b-2 border-[#2F51A8] flex items-center justify-center px-3 py-7'>
						<span className='text-lg font-normal text-nowrap'>
							Всего целей: <span className='font-bold'>100</span>
						</span>
					</div>
					<div className='border-r-2 border-[#2F51A8] flex items-center justify-center px-3 py-7'>
						<span className='text-lg font-normal text-nowrap'>
							Всего целей: <span className='font-bold'>100</span>
						</span>
					</div>
					<div className='flex items-center justify-center px-3 py-7'>
						<span className='text-lg font-normal text-nowrap'>
							Всего целей: <span className='font-bold'>100</span>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
