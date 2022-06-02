import Navbar from '../Navbar.js';
import { Outlet } from 'react-router-dom';

const Users = props => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Users;