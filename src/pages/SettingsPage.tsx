import { useState } from 'react'
import { Link } from 'react-router'
import { HomeIcon } from '../components/icons/home-icon'
import { SettingsFriendsGoals } from '../components/settings/settings-friends-goals'
import { SettingsNotifies } from '../components/settings/settings-notifies'
import { SettingsUserInfo } from '../components/settings/settings-user-info/settings-user-info'
import { SettingsUserName } from '../components/settings/settings-user-name/settings-user-name'
import { useChangeSettings, useGetSettings } from '../hooks/useChangeSettings'

export function SettingsPage() {
	const { data: settings } = useGetSettings()

	const [todaySubGoalsNotifications, setTodaySubGoalsNotifications] =
		useState<boolean>(settings?.todaySubGoalsNotifications ?? true)
	const [tomorrowSubGoalNotifications, setTomorrowSubGoalNotifications] =
		useState<boolean>(settings?.tomorrowSubGoalsNotifications ?? true)
	const [
		monthlyGoalDeadlineNotifications,
		setMonthlyGoalDeadlineNotifications,
	] = useState<boolean>(settings?.monthlyGoalDeadlineNotifications ?? true)
	const [customNotifications, setCustomNotifications] = useState<boolean>(
		settings?.customNotifications ?? true
	)

	const { mutateAsync: changeSettings } = useChangeSettings()

	return (
		<section className='relative'>
			<Link to='/' className='absolute top-3 right-3'>
				<HomeIcon />
			</Link>

			<SettingsUserInfo />

			<SettingsUserName />

			<SettingsNotifies
				onChange={changeSettings}
				customNotifications={customNotifications}
				setCustomNotifications={setCustomNotifications}
				monthlyGoalDeadlineNotifications={monthlyGoalDeadlineNotifications}
				setMonthlyGoalDeadlineNotifications={
					setMonthlyGoalDeadlineNotifications
				}
				todaySubGoalsNotifications={todaySubGoalsNotifications}
				setTodaySubGoalsNotifications={setTodaySubGoalsNotifications}
				tomorrowSubGoalNotifications={tomorrowSubGoalNotifications}
				setTomorrowSubGoalNotifications={setTomorrowSubGoalNotifications}
			/>

			<SettingsFriendsGoals />
		</section>
	)
}
