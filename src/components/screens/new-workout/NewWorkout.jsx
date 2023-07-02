import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Layout from '../../layout/Layout'
import Alert from '../../ui/alert/Alert'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import SelectExercises from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const NewWorkout = () => {
	const {
		isLoading,
		isSuccess,
		error,
		errors,
		handleSubmit,
		onSubmit,
		control,
		register
	} = useNewWorkout()
	return (
		<Layout
			bgImage='/images/new-workout-bg.jpg'
			heading='Create new workout'
			backLink='/new-workout'
		>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
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
					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>
					<SelectExercises control={control} />

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath.message}</div>
					)}

					<Button>Create</Button>
				</form>
			</div>
		</Layout>
	)
}

export default NewWorkout
