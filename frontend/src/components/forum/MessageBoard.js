import React from "react";
import {Divider, Grid, Typography, Box} from '@mui/material';

const MessageBoard = (props) => {
    let key_increment = 0;
    let epoch_date = new Date(1970, 0, 1);
    return (
        <>
        {props.allMessages && props.allMessages.map((message) => {
            key_increment = key_increment + 1;
            let date = epoch_date;
            let seconds = message.dateCreated.seconds - 14400;
            date.setSeconds(seconds);
            return (
                <div key={key_increment}>
                    <Box justify="center" component="span" sx={{ display: 'block', p: 1, m: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        border:'2px solid #FFA778',
                        borderRadius: 2, fontSize: '1rem', fontWeight: '700'}}>
                        <Typography>[{message.user}] posted at [{date.toLocaleTimeString()}]: {message.content}</Typography>
                    </Box>
                </div>
            )
        })}
        </>
    );
}

export default MessageBoard;