import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Avatar, Box, Typography } from '@mui/material';

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

			userInfo = userDesc;
		}
		else {
			userInfo = 
				<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
					<Typography variant="h3" style={{ textAlign: "center" }} >
						How'd you get here!?
					</Typography>
					<Typography variant="h5" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
						This user's profile is set to private.
					</Typography>
				</Box>
		}
	}

	return (
		<>
			{user ? // show if user data ready
			<Paper sx={style}>
				{userInfo}
			</Paper>
			: null}
		</>
	);
};

export default User;