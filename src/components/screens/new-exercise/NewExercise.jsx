import { Controller, useForm } from 'react-hook-form'

import { useMutation } from '@tanstack/react-query'

import cn from 'clsx'

import ExerciseService from '../../../services/exercise/exercise.service'
import Layout from '../../layout/Layout'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import styles from './NewExercise.module.scss'
import { getIconPath } from './icon-path.util'

const data = ['chest', 'back', 'biceps', 'shoulders', 'hip', 'legs']

const NewExercise = () => {
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
		['create exercise'],
		body => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}
	return (
		<Layout
			bgImage='/images/new-exercise-bg.jpg'
			heading='Create new exercise'
			backLink='/new-workout'
		>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						name='name'
						register={register}
						error={errors?.name?.message}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Name'
					/>
					<Field
						name='sets'
						register={register}
						error={errors?.sets?.message}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Sets must be number',
							required: 'Sets is required'
						}}
						placeholder='Sets'
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data?.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</Layout>
	)
}

export default NewExercise
