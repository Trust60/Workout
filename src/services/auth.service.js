import Cookies from 'js-cookie'

import { $axios } from '../api'
import { TOKEN } from '../app.constants'

export const AuthService = {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			if (data.token) Cookies.set(TOKEN, data.token)

			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default AuthService
