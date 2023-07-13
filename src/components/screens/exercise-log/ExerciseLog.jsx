import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'

import { useExerciseLog } from './hooks/useExerciseLog'

import ExerciseError from './ExerciseError'
import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'

const ExerciseLog = () => {
	const {
		exerciseLog,
		isLoading,
		isSuccess,
		error,
		getState,
		onChangeState,
		toggleSet
	} = useExerciseLog()

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.sets.map(item => (
							<TableRow
								getState={getState}
								onChangeState={onChangeState}
								toggleSet={toggleSet}
								item={item}
								key={item.id}
							/>
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.sets?.length === 0 && (
					<Alert type='warning' text='Sets not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
