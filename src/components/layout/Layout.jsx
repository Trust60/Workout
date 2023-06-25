import cn from 'clsx'
import PropTypes from 'prop-types'

import styles from './Layout.module.scss'
import Header from './header/Header'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	return (
		<section
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</section>
	)
}
Layout.propTypes = {
	children: PropTypes.node.isRequired
}
export default Layout
