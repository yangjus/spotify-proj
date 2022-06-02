/* listing should have title, summary, maybe image.
    message listing: title = name, summary is last message
    forum listing: title is title, summary is user who posted it
 */
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Listing(props) {
    return(
        <div>


            <ListItem alignItems="flex-start">
                {props.avatar&&<ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={props.avatar} /> </ListItemAvatar>}

                <ListItemText
                    primary={props.header}
                    secondary={
                        <React.Fragment>
                            {props.name && <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {props.name}
                            </Typography>}
                            {props.msg}
                        </React.Fragment>
                    }
                />
            </ListItem>


            </div>
    );
}