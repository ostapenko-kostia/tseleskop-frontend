export function RegisterUsername() {
	return (
		<>
			<table className='w-full text-center text-white'>
				<thead
					style={{
						background: 'linear-gradient(90deg, #27448D 0%, #0B1327 100%)',
					}}
				>
					<tr>
						<th>Логин публичный</th>
						<th className='text-xs border-l'>
							<button>Копировать</button>
						</th>
						<th className='text-xs border-l'>
							<button>Изменить</button>
						</th>
					</tr>
				</thead>
				<tbody className='text-black'>
					<tr>
						<td className='py-1 font-bold'>Slava_Kovalev288</td>
					</tr>
				</tbody>
			</table>
			<hr
				className='h-[1px]'
				style={{
					background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
				}}
			/>
		</>
	)
}
