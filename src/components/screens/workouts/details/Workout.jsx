import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import WorkoutLogService from '../../../../services/workout/workout-log.service'
import Loader from '../../../ui/loader/Loader'

import ExerciseItem from './ExerciseItem'
import styles from './Workout.module.scss'
import WorkoutHeader from './WorkoutHeader'

const Workout = () => {
	const { id } = useParams()
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout log', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})
	return (
		<>
			<WorkoutHeader isSuccess={isSuccess} workoutLog={workoutLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}></div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index % 2 === 0 &&
									index === workoutLog.exerciseLogs.lenght - 1 && (
										<div className={styles.line} />
									)}
							</Fragment>
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Workout
