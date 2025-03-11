import { Cell, Pie, PieChart } from 'recharts'
import { URGENCY_COLORS } from './home-list-item'

const pieChartData = [
	{ name: 'low', value: 5 },
	{ name: 'average', value: 3 },
	{ name: 'high', value: 2 },
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	index,
}: any) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text
			x={x}
			y={y}
			fill='black'
			fontSize={12}
			fontWeight={500}
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'
		>
			{pieChartData[index].value}
		</text>
	)
}

export function HomeStatistics() {
	return (
		<section className='pt-5 font-bold text-lg w-full'>
			<h2>Статистика</h2>
			<div className='relative p-[3px] rounded-xl'>
				<div
					className='absolute inset-0 rounded-lg'
					style={{
						background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
					}}
				/>
				<div className='relative bg-white grid grid-cols-1 grid-rows-2 rounded-md'>
					<div className='border-b-2 border-[#2F51A8] flex items-center justify-center px-3 py-7'>
						<span className='text-lg font-normal text-nowrap'>
							Всего целей: <span className='font-bold'>100</span>
						</span>
					</div>
					<div className='relative flex flex-col p-2'>
						<span className='font-normal text-sm text-nowrap'>
							График важности целей:
						</span>
						<div className='w-full flex items-center justify-around h-[80px] px-5 mt-2 max-[400px]:justify-between max-[400px]:px-0'>
							<PieChart width={100} height={100}>
								<Pie
									data={pieChartData}
									outerRadius={40}
									spacing={0}
									rotate={-90}
									dataKey='value'
									labelLine={false}
									label={renderCustomizedLabel}
								>
									{pieChartData.map((item, index) => (
										<Cell
											key={`cell-${index}`}
											fill={
												URGENCY_COLORS[
													item.name.toLowerCase() as keyof typeof URGENCY_COLORS
												]
											}
										>
											{item.value}
										</Cell>
									))}
								</Pie>
							</PieChart>
							<div className='flex flex-col items-start gap-3 font-normal text-xs'>
								<div className='flex items-center gap-2'>
									<div
										className='w-5 h-3'
										style={{ backgroundColor: URGENCY_COLORS['low'] }}
									/>
									<span>Желаемая</span>
								</div>
								<div className='flex items-center gap-2'>
									<div
										className='w-5 h-3'
										style={{ backgroundColor: URGENCY_COLORS['average'] }}
									/>
									<span>Нужная</span>
								</div>
								<div className='flex items-center gap-2'>
									<div
										className='w-5 h-3'
										style={{ backgroundColor: URGENCY_COLORS['high'] }}
									/>
									<span>Важная</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
