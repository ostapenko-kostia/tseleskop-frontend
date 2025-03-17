import Switch from '../ui/switch'

interface Props {
	monthlyGoalDeadlineNotifications: boolean
	setMonthlyGoalDeadlineNotifications: (i: boolean) => void
	todaySubGoalsNotifications: boolean
	setTodaySubGoalsNotifications: (i: boolean) => void
	tomorrowSubGoalNotifications: boolean
	setTomorrowSubGoalNotifications: (i: boolean) => void
	customNotifications: boolean
	setCustomNotifications: (i: boolean) => void
	onChange: (data: any) => void
}

export function SettingsNotifies({
	todaySubGoalsNotifications,
	setTodaySubGoalsNotifications,
	tomorrowSubGoalNotifications,
	setTomorrowSubGoalNotifications,
	monthlyGoalDeadlineNotifications,
	setMonthlyGoalDeadlineNotifications,
	customNotifications,
	setCustomNotifications,
	onChange,
}: Props) {
	return (
		<details className='mt-5' open>
			<summary
				className='text-white px-2 h-min p-0.5 text-center appearance-none bg-[#27448D]'
				style={{
					background: 'linear-gradient(90deg, #27448D 0%, #0B1327 100%)',
				}}
			>
				Настройка уведомлений
			</summary>
			<div className='flex flex-col px-4 gap-6 mt-6'>
				<div className='relative p-[3px] rounded-xl'>
					<div
						className='absolute inset-0 rounded-lg'
						style={{
							background: 'linear-gradient(90deg, #2F51A8 0%, #122042 100%)',
						}}
					/>
					<div className='relative bg-white flex items-center justify-between rounded-md py-1.5 px-3'>
						<p className='underline text-sm'>Уведомлять по задачам за день</p>
						<Switch
							className='scale-120'
							checked={tomorrowSubGoalNotifications}
							onChange={checked => {
								setTomorrowSubGoalNotifications(checked)
								onChange({
									tomorrowSubGoalNotifications: checked,
									todaySubGoalsNotifications,
									monthlyGoalDeadlineNotifications,
									customNotifications,
								})
							}}
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
						<p className='underline text-sm'>Уведомлять по задачам на день</p>
						<Switch
							className='scale-120'
							checked={todaySubGoalsNotifications}
							onChange={checked => {
								setTodaySubGoalsNotifications(checked)
								onChange({
									tomorrowSubGoalNotifications,
									todaySubGoalsNotifications: checked,
									monthlyGoalDeadlineNotifications,
									customNotifications,
								})
							}}
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
						<p className='underline text-sm'>Уведомлять по целям за 1 месяц</p>
						<Switch
							className='scale-120'
							checked={monthlyGoalDeadlineNotifications}
							onChange={checked => {
								setMonthlyGoalDeadlineNotifications(checked)
								onChange({
									tomorrowSubGoalNotifications,
									todaySubGoalsNotifications,
									monthlyGoalDeadlineNotifications: checked,
									customNotifications,
								})
							}}
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
						<p className='underline text-sm'>Произвольные уведомления</p>
						<Switch
							className='scale-120'
							checked={customNotifications}
							onChange={checked => {
								setCustomNotifications(checked)
								onChange({
									tomorrowSubGoalNotifications,
									todaySubGoalsNotifications,
									monthlyGoalDeadlineNotifications,
									customNotifications: checked,
								})
							}}
						/>
					</div>
				</div>
			</div>
		</details>
	)
}
