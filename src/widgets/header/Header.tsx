import Logo from '../../assets/image 6.svg'
import styles from './Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<img src={Logo} alt='logo-type' />
			<h1 className={styles.header__title}>Поиск авиабилетов</h1>
		</header>
	)
}
