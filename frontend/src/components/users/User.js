import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = props => {
	const [user, setUser] = useState();
	let params = useParams();

	useEffect(() => {
		axios.get('/users/user', { params : {...params} })
			.then((res) => setUser(res));
	}, []);

	return (
		<>
			{user ? JSON.stringify(user) : null}
		</>
	);
};

export default User;