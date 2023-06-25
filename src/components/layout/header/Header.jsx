import { IoMdArrowBack } from 'react-icons/io'

import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack />
			</button>
			<Hamburger />
		</header>
	)
}

export default Header
