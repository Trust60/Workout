import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { useMutation } from '@tanstack/react-query'

import WorkoutService from '../../../services/workout/workout.service'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, isLoading, error, mutate } = useMutation(
		['create workout'],
		body => WorkoutService.create(body),
		{
			onSuccess: () => {
				reset({
					name: '',
					exerciseIds: []
				})
			}
		}
	)

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(exercise => exercise.value)
		})
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			reset,
			control,
			isSuccess,
			isLoading,
			error,
			onSubmit
		}),
		[errors, control, isSuccess, isLoading, error]
	)
}
