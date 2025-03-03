import { InitData } from '@telegram-apps/sdk'

export interface InitDataWithPin extends InitData {
	pin: string
}
