import React from "react";
import {Button, Typography, Box} from '@mui/material';

const AllDiscussions = (props) => {
    let key_increment = 0;
    let epoch_date = new Date(1970, 0, 1);

    const viewPost = () => {
        null
    };

    return (
        <>
        {props.allPosts && props.allPosts.map((post) => {
            key_increment = key_increment + 1;
            let date = epoch_date;
            let seconds = post.dateCreated.seconds - 14400;
            date.setSeconds(seconds);
            return (
                <div key={key_increment}>
                    <Box justify="center" component="span" sx={{ display: 'block', p: 1, m: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        border:'2px solid #FFA778',
                        borderRadius: 2, fontSize: '1rem', fontWeight: '700'}}>
                        <Typography>[{post.byUser}] posted at [{date.toLocaleTimeString()}]: {post.forumName}</Typography>
                        <Button variant="contained" onClick={viewPost}>View Post</Button>
                    </Box>
                </div>
            )
        })}
        </>
    );
}

export default AllDiscussions;