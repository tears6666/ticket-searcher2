import { useState } from 'react'
import styles from './Nav.module.scss'

export default function Nav() {
	const [isActive, setIsActive] = useState(0)
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>
				<li onClick={() => setIsActive(1)} className={styles.list__item_first}>
					Самый дешевый
				</li>
				<li className={styles.list__item}>Самый быстрый</li>
				<li className={styles.list__item_second}>Самый оптимальный</li>
			</ul>
		</nav>
	)
}
