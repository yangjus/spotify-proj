import Navbar from '../Navbar.js';
import { Outlet } from 'react-router-dom';

const Users = props => {
	return (
		<>
			<Navbar ispage={[false, false, true, false]} />
			<Outlet />
		</>
	);
};

export default Users;