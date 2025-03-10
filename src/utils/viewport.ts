export const setViewportHeight = () => {
	const tg = window.Telegram?.WebApp
	if (tg) {
		document.documentElement.style.setProperty(
			'--tg-viewport-height',
			`${tg.viewportHeight}px`
		)
	}
}

export const initViewportHeight = () => {
	setViewportHeight()
	window.addEventListener('resize', setViewportHeight)
	return () => window.removeEventListener('resize', setViewportHeight)
}
