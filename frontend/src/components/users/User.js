import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Avatar, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
	display: 'flex',
	flexWrap: 'wrap',
	m: 2
};

const User = props => {
	const [user, setUser] = useState();
	let params = useParams();

	useEffect(() => {
		axios.get('/users/user', { params : {...params} })
			.then((res) => setUser(res.data));
	}, []);

	let userInfo;
	if (user) {
		if (user.public) {
			const userDesc = 
				<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
					<Avatar alt="User's profile image" src={user.profileImage} sx={{width: "10em", height: "10em", my: 2, ml: 1.5, mr: -.5 }} />
					<Box sx={{ display: "flex", flexDirection: "column", ml: 2, mt: -2}}>
						<Typography variant="h3" sx={{ textAlign: "left" }}>
							{user.username}
						</Typography>
						<Typography secondary variant="h5" sx={{ textAlign: "left", color: "rgba(0, 0, 0, 0.6)" }}>
							{user.bio}
						</Typography>
					</Box>
				</Box>

			userInfo =
				<Paper sx={style}>
					{userDesc}
				</Paper>
		}
		else {
			userInfo = 
			 	<Paper sx={{ m: 2 }} >
					<Typography variant="h3" sx={{ mt: 2 }} >
						How'd you get here!?
					</Typography>
					<Typography variant="h5" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
						This user's profile is set to private.
					</Typography>
					<Button
						component={Link}	
						to=".."
						variant="contained"
						color="warning"
						sx= {{ m: 2 }}
					>
						Back to User Directory
					</Button>
				</Paper>
		}
	}

	return (
		<>
			{user ? // show if user data ready
			<>
				{userInfo}
			</>
			: null}
		</>
	);
};

export default User;