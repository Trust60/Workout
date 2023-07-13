import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercise-log.service'

import { useUpdateLogSet } from './useUpdateLogSet'

export const useExerciseLog = () => {
	const { id } = useParams()

	const [sets, setSets] = useState([])

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(['get exercise log', id], () => ExerciseLogService.getById(id), {
		select: ({ data }) => data,
		onSuccess(data) {
			if (data?.sets?.length) setSets(data.sets)
		}
	})

	const { error, updateSet } = useUpdateLogSet(exerciseLog?.sets)

	const onChangeState = (setId, key, value) => {
		const newSets = sets.map(set => {
			if (set.id === setId) {
				return { ...set, [key]: value }
			}

			return set
		})

		setSets(newSets)
	}

	const getSet = setId => {
		return sets.find(set => set.id === setId)
	}

	const getState = (setId, key) => {
		const set = getSet(setId)
		return set ? set[key] : key === 'isCompleted' ? false : 0
	}

	const toggleSet = (setId, isCompleted) => {
		const set = getSet(setId)
		updateSet({
			setId,
			body: {
				isCompleted,
				repeat: +set.repeat,
				weight: +set.weight
			}
		})
	}

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		toggleSet,
		error,
		onChangeState,
		getState
	}
}
