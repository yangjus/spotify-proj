import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Card, Button, Grid, Typography, CardContent, Avatar, CardActions, IconButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import Navbar from '../Navbar.js';

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

const UserCard = props => {
	return (
		<>
		 	<Grid item xs={4}>
			 	<Card sx={{ display: 'flex', "align-items": "center" }} >
				 	<Avatar alt="User's profile image" src={props.profileImage} sx={{ width: "5em", height: "5em", my: 2, ml: 1.5, mr: -.5 }} />	
				 	<Box sx={{ display: 'flex', flexDirection: 'column' }}>
						<CardContent sx={{ flex: '1 0 auto' }}>
							<Typography variant="h5" sx={{ textAlign: "left" }}>
								{props.username}
							</Typography>
							<Typography variant="subtitle1" sx={{ textAlign: "left" }}>
								{props.bio}
							</Typography>
						</CardContent>	
						<CardActions sx={{ mt: -3 }}>
							<Button size="small" sx={{ ml: .5 }}>View Profile</Button>
							<IconButton aria-label="message user">
								<MessageIcon />
							</IconButton>
						</CardActions>
					</Box>
				</Card>
			</Grid>
		</>
	);
}

export default Users;