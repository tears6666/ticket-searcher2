import { useState } from 'react'
import styles from './Nav.module.scss'

export default function Nav() {
	const [isActive, setIsActive] = useState(0)
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>
				<li
					onClick={() => setIsActive(0)}
					className={
						isActive === 0
							? styles.list__item_first_active
							: styles.list__item_first
					}
				>
					Самый дешевый
				</li>
				<li
					onClick={() => setIsActive(1)}
					className={
						isActive === 1 ? styles.list__item_active : styles.list__item
					}
				>
					Самый быстрый
				</li>
				<li
					onClick={() => setIsActive(2)}
					className={
						isActive === 2
							? styles.list__item_second_active
							: styles.list__item_second
					}
				>
					Самый оптимальный
				</li>
			</ul>
		</nav>
	)
}
