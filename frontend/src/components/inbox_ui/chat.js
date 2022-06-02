import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Listing from "./listing";
import List from "@mui/material/List";


export default function Chat(props) {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return(
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <h1>{props.name}</h1>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Listing name = "Bob Bob"  msg=": I like songs!"/>
            <Listing name = "Joe Schmoe"  msg = ": I'll be in your neighborhood doing errands this Friday"/>
            <Listing name = "Joe Schmoe"  msg = ": See you soon"/>
            <Listing name = "Bob Bob"  msg = ": Ok"/>
        </List>
        <TextField
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
        />
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
        </Box>

    );
}
