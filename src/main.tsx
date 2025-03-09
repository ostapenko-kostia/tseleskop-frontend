import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { InitDataContextProviver } from './hooks/useInitData.tsx'
import { parseInitDataQuery } from '@telegram-apps/sdk'

const queryClient = new QueryClient()

// const initData = parseInitDataQuery(window.Telegram.WebApp.initData)
const initData = parseInitDataQuery(
	'user=%7B%22id%22%3A972463296%2C%22first_name%22%3A%22Kostiantyn%22%2C%22last_name%22%3A%22Ostapenko%22%2C%22username%22%3A%22khos_streks%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FN8qN5oTwZaHGgex5vOSTFbag_ooKVsq2rRyYRU2mJIU.svg%22%7D&chat_instance=-1083919207776517697&chat_type=sender&auth_date=1741257541&signature=ybxo1IICjrOabGiS90a-9XkiMEpjSZgZZzEOjWpVVmtoB70jLfMto3mw0Rzxd55iuqR4iuMNq3Zhcb43XNuJCg&hash=8235b76f4848b10299011ebe31b4154d6e6523c99e780026f95518cc38a228d4'
)

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<InitDataContextProviver value={initData}>
					<Toaster />
					<App />
				</InitDataContextProviver>
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>
)
