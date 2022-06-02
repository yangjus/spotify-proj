import { Grid, Card, Avatar, Box, CardContent, Typography, CardActions, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MessageIcon from '@mui/icons-material/Message';

const UserCard = props => {
	const goToUserPage = event => {
		window.open()
	};

	return (
		<>
		 	<Grid item xs={4}>
			 	<Card sx={{ display: 'flex', "alignItems": "center" }} >
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
							<Button
								component={Link} 
								to={props.spotifyID}
								size="small" 
								sx={{ ml: .5 }}
							>
								View Profile
							</Button>
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

export default UserCard;