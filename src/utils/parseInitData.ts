export function parseInitData(query: string) {
	const params = new URLSearchParams(query)
	const user = JSON.parse(decodeURIComponent(params.get('user') || '{}'))

	return {
		auth_date: new Date(params.get('auth_date') || ''),
		chat_instance: params.get('chat_instance') || '',
		chat_type: params.get('chat_type') || '',
		hash: params.get('hash') || '',
		signature: params.get('signature') || '',
		user: {
			id: user.id || 0,
			first_name: user.first_name || '',
			last_name: user.last_name || '',
			username: user.username || '',
			language_code: user.language_code || '',
			allows_write_to_pm: user.allows_write_to_pm || false,
			photo_url: user.photo_url || '',
		},
	}
}
