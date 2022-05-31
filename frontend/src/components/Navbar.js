import React from "react";
import { Link } from "react-router-dom";
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Grid} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: "#FFA778"}}>
                    <Typography variant="h6" component="div">
                        Musely Website
                    </Typography>
                    <Link to="/home" style={linkStyle}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/home" style={linkStyle}>
                        <Button color="inherit">Liked Songs</Button>
                    </Link>
                    <Link to="/home" style={linkStyle}>
                        <Button color="inherit">Discover Users</Button>
                    </Link>
                    <Link to="/home" style={linkStyle}>
                        <Button color="inherit">Forum</Button>
                    </Link>
                    <Typography style={{color: "black"}}>
                            _username_
                    </Typography>
                    <IconButton>
                        <AccountCircleIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
    
}

export default Navbar;