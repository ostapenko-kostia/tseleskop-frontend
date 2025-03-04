import { TOKEN } from '../../types/enum'
import Cookies from 'js-cookie'

export const getAccessToken = () => Cookies.get(TOKEN.ACCESS_TOKEN)
