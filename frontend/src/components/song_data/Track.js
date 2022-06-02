import { Grid, Paper, Avatar, Typography } from '@mui/material';

const style = {
	display: 'flex',
	flexWrap: 'wrap',
	m: 1,
	p: 2
}

const Track = props => {
	return (
		<>
		 	<Paper sx={style}>
				<Grid container alignItems="center" spacing={2}>
					<Grid item xs={3}>
						<Avatar
							alt="Album cover"
							src={props.album.images[0].url}
							variant="square"
							sx={{ width: "4em", height: "4em" }}
						/>
					</Grid>
					<Grid item xs={3}>
						{props.name}
					</Grid>
					<Grid item xs={3}>
						{props.artists[0].name}
					</Grid>
					<Grid item xs={3}>
						{props.album.name}
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default Track;