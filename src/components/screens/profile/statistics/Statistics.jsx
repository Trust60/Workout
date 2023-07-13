import { useProfile } from '../useProfile'

import styles from './Statistics.module.scss'

const Statistics = () => {
	const { data } = useProfile()

	return (
		<div className={styles.wrapper}>
			{data?.statistics?.map(
				statistic =>
					// Проверка на ноль для отображения статистики
					statistic.value !== 0 && (
						<div className={styles.count} key={statistic.label}>
							<div className={styles.heading}>{statistic.label}</div>
							<div className={styles.number}>{statistic.value}</div>
						</div>
					)
			)}
		</div>
	)
}

export default Statistics
