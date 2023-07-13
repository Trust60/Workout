import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercise-log.service'

import { useCompleteLog } from './useCompleteLog'

export const useUpdateLogSet = sets => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { completeLog, errorCompleted } = useCompleteLog()

	const { mutate, error: errorChange } = useMutation(
		['update log set'],
		({ setId, body }) => ExerciseLogService.updateSet(setId, body),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get exercise log', id]).then(() => {
					const filteredSets = sets.filter(set => set.isCompleted)

					if (filteredSets.length === sets.length - 1) {
						completeLog({ isCompleted: true })
					}
				})
			}
		}
	)

	return { updateSet: mutate, error: errorChange || errorCompleted }
}
