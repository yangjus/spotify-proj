import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Navbar from '../Navbar.js';
import UserCard from './UserCard.js';

const Users = props => {
	const [users, setUsers] = useState();

	useEffect(() => {
		axios.get('/users')
			.then(res => setUsers(res.data.users))
	}, []);

	return (
		<>
			<Navbar />
			<Typography variant="h3">Users</Typography>
			<Box sx={{ flexGrow: 1, m: 2 }} >
				<Grid container spacing={2} alignItems="center">
					{users ? users.map(user => <UserCard {...user} key={user.spotifyID} />) : null}
				</Grid>
			</Box>
		</>
	);
};

export default Users;