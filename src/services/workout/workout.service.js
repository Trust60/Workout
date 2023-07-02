import { $axios } from '../../api'

const WORKOUTS = '/workouts'

class WorkoutService {
	async getAll() {
		return $axios.get(WORKOUTS)
	}

	async getById(id) {
		return $axios.put(`${WORKOUTS}/${id}`)
	}

	async create(body) {
		return $axios.post(WORKOUTS, body)
	}

	async update(body, id) {
		return $axios.put(`${WORKOUTS}/${id}`, body)
	}

	async delete(id) {
		return $axios.delete(`${WORKOUTS}/${id}`)
	}
}
export default new WorkoutService()
