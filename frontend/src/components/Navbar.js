import {React, useState} from "react";
import { Link } from "react-router-dom";
import {AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
    };

    const [isPage, setPage] = useState(props.ispage);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: "#FFA778"}}>
                    <Typography variant="h5" component="div">
                        Musely Website
                    </Typography>
                    <Link to="/home" style={linkStyle}>
                        <Button color="inherit" style={{backgroundColor: isPage[0] ? '#FF7D61 ' : "#FFA778"}}>Home</Button>
                    </Link>
                    <Link to="/home" style={linkStyle}>
                        <Button color="inherit" style={{backgroundColor: isPage[1] ? '#FF7D61 ' : "#FFA778"}}>Liked Songs</Button>
                    </Link>
                    <Link to="/home" style={linkStyle}>
                        <Button color="inherit" style={{backgroundColor: isPage[2] ? '#FF7D61 ' : "#FFA778"}}>Discover Users</Button>
                    </Link>
                    <Link to="/home" style={linkStyle}>
                        <Button color="inherit" style={{backgroundColor: isPage[3] ? '#FF7D61 ' : "#FFA778"}}>Forum</Button>
                    </Link>
                    <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} 
                        aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} 
                        style={{color: "black", position: "relative", left: "80vh"}}>
                        _username_
                        <AccountCircleIcon/>
                    </Button>
                    <Menu id="basic-menu" anchorEl={anchorEl} open={open}
                        onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
                        <MenuItem onClick={handleClose}>My Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
    
}

export default Navbar;