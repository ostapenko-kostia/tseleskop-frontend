import { useState } from 'react'
import { Link } from 'react-router'
import { HomeIcon } from '../components/icons/home-icon'
import { SettingsFriendsGoals } from '../components/settings/settings-friends-goals'
import { SettingsNotifies } from '../components/settings/settings-notifies'
import { SettingsUserInfo } from '../components/settings/settings-user-info/settings-user-info'
import { SettingsUserName } from '../components/settings/settings-user-name/settings-user-name'

export function SettingsPage() {
	const [taskNotify, setTaskNotify] = useState(false)
	const [taskNotifyDayToDay, setTaskNotifyDayToDay] = useState(false)
	const [goalNotify, setGoalNotify] = useState(false)
	const [customNotifies, setCustomNotifies] = useState(false)

	return (
		<section className='relative'>
			<Link to='/' className='absolute top-3 right-3'>
				<HomeIcon />
			</Link>

			<SettingsUserInfo />

			<SettingsUserName />

			<SettingsNotifies
				customNotifies={customNotifies}
				setCustomNotifies={setCustomNotifies}
				goalNotify={goalNotify}
				setGoalNotify={setGoalNotify}
				taskNotify={taskNotify}
				setTaskNotify={setTaskNotify}
				taskNotifyDayToDay={taskNotifyDayToDay}
				setTaskNotifyDayToDay={setTaskNotifyDayToDay}
			/>

			<SettingsFriendsGoals />
		</section>
	)
}
