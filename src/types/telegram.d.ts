declare global {
	interface TelegramWebApp {
		initData: string
	}

	interface Window {
		Telegram: {
			WebApp: TelegramWebApp
		}
	}
}

export {}
