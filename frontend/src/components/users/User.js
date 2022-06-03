import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Avatar, Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Track from '../song_data/Track.js';

const style = {
	display: 'flex',
	flexWrap: 'wrap',
	m: 2,
	p: 2
};

const User = props => {
	const [user, setUser] = useState();
	const [tracks, setTracks] = useState();
	const [artists, getArtists] = useState();
	let params = useParams();

	useEffect(() => {
		axios.get('/users/user', { params : {...params} })
			.then((res) => {
				setUser(res.data)
				document.title = res.data.public ? `${res.data.username}'s Profile` : `Private Profile`;
			});
		axios.get('/songs/me', { params: { AUTH_KEY: localStorage.getItem("accessToken")}})
			.then((res) => {
				setTracks(res.data.items);
			})

	}, [params]);

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
						<Typography variant="h5" sx={{ textAlign: "left", color: "rgba(0, 0, 0, 0.6)" }}>
							{user.bio}
						</Typography>
					</Box>
				</Box>;
			
			let userArtists;
			if (user.displayArtists) {
				userArtists =
					<>
						<Typography variant="h5" textAlign="left">Top Artists</Typography>

					</>
			}
			else {
				userArtists =
					<Grid>
						<Typography variant="h5" textAlign="left">Top Artists</Typography>
						<Typography variant="h6" sx={{ textAlign: "left" }}>
							{user.username} doesn't want to share their top artists :(
						</Typography>
					</Grid>
			}

			let userSongs;
			if (user.displaySongs) {
				userSongs =
					<Grid>
						<Typography variant="h5" textAlign="left">Top Songs</Typography>	
						<Box>
							{tracks ? 
							tracks.slice(0, 5).map((track) => <Track {...track} key={track.id} />)
							: null}
						</Box>
					</Grid>
			}
			else {
				userSongs =
					<Grid>
						<Typography variant="h5" textAlign="left">Top Songs</Typography>	
						<Typography variant="h6" sx={{ textAlign: "left" }}>
							{user.username} doesn't want to share their top songs :(
						</Typography>
					</Grid>
			}

			userInfo =
			 	<>
					<Paper sx={style}>
						{userDesc}
					</Paper>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Paper sx={{ ...style, mr: 0, mt: 0 }}>
								{userArtists}
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper sx={{ ...style, ml: 0, mt: 0 }}>
								{userSongs}
							</Paper>
						</Grid>
					</Grid>
				</>;
		}
		else {
			userInfo = 
			 	<Paper sx={{ m: 2, pt: 1 }}>
					<Typography variant="h3">
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
						sx= {{ mb: 2, mt: 1 }}
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