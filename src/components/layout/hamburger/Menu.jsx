import { Link } from 'react-router-dom'

import cn from 'clsx'

import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

const Menu = ({ isShow }) => {
	const handlerLogout = () => {}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={handlerLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
