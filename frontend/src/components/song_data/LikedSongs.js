import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
import { Grid, Typography } from '@mui/material';
import Track from './Track';

const LikedSongs = props => {
	const [tracks, setTracks] = useState();

	useEffect(() => {
		axios.get('/songs/me', { params: { AUTH_KEY: localStorage.getItem("accessToken")}})
			.then((res) => setTracks(res.data.items))
	}, [])

	return (
		<>
			<Navbar ispage={[false, true, false, false]} />
			<Typography variant="h3" sx={{ mt: 2 }}>Your Liked Songs</Typography>
			{tracks ?
			<Grid container spacing={1} alignItems="center">
				{tracks.map((track) =>  
						<Grid item xs={6}><Track {...track} key={track.id} /></Grid>
				)}
			</Grid>
			: null}
		</>
	)
};

export default LikedSongs;