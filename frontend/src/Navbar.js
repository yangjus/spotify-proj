import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
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
                </Toolbar>
            </AppBar>
        </Box>
    );
    
}

export default Navbar;