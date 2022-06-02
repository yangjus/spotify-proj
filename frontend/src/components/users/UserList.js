import { Typography, Box, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard.js';

const UserList = props => {
	const [users, setUsers] = useState();

	useEffect(() => {
		axios.get('/users')
			.then(res => setUsers(res.data.users))
	}, []);

	return (
		<>
			<Typography variant="h3">Users</Typography>
			<Box sx={{ flexGrow: 1, m: 2 }} >
				<Grid container spacing={2} alignItems="center">
					{users ? users.map(user => <UserCard {...user} key={user.spotifyID} />) : null}
				</Grid>
			</Box>
		</>
	);
}

export default UserList;