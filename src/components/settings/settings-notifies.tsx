import Switch from '../ui/switch'

interface Props {
	taskNotify: boolean
	setTaskNotify: (i: boolean) => void
	taskNotifyDayToDay: boolean
	setTaskNotifyDayToDay: (i: boolean) => void
	goalNotify: boolean
	setGoalNotify: (i: boolean) => void
	customNotifies: boolean
	setCustomNotifies: (i: boolean) => void
}

export function SettingsNotifies({
	setTaskNotify,
	taskNotify,
	customNotifies,
	goalNotify,
	setCustomNotifies,
	setGoalNotify,
	setTaskNotifyDayToDay,
	taskNotifyDayToDay,
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
						<p className='underline text-sm'>Уведомлять по задачам на день</p>
						<Switch
							className='scale-120'
							checked={taskNotify}
							onChange={setTaskNotify}
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
						<p className='underline text-sm'>
							Уведомлять по задачам день в день
						</p>
						<Switch
							className='scale-120'
							checked={taskNotifyDayToDay}
							onChange={setTaskNotifyDayToDay}
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
							checked={goalNotify}
							onChange={setGoalNotify}
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
							checked={customNotifies}
							onChange={setCustomNotifies}
						/>
					</div>
				</div>
			</div>
		</details>
	)
}
