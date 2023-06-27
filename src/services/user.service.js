import { $axios } from '../api'

const USERS = '/users'

const getProfile = async () => {
	return $axios.get(`${USERS}/profile`)
}

export default {
	getProfile
}
