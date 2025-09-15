import { Outlet } from 'react-router-dom'
import Header from '../../widgets/header/Header'
import Nav from '../../widgets/nav/Nav'

export const Layout = () => {
	return (
		<>
			<Header />
			<Nav />
			<Outlet />
		</>
	)
}
