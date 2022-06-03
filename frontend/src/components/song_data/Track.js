import { Grid, Paper, Avatar, Link } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

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
					<Grid item xs>
					 	<Link variant="body1" href={props.external_urls.spotify} underline="hover" color={deepOrange[700]}>
							{props.name}
						</Link>
					</Grid>
					<Grid item xs>
						<Link variant="body1" href={props.artists[0].external_urls.spotify} underline="hover" color={deepOrange[700]}>
							{props.artists[0].name}
						</Link>
					</Grid>
					<Grid item xs>
						<Link variant="body1" href={props.album.external_urls.spotify} underline="hover" color={deepOrange[700]}>
							{props.album.name}
						</Link>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default Track;