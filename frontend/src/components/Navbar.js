import {React, useState} from "react";
import { Link } from "react-router-dom";
import {AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';

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
                    <Grid container spacing={2}>
                        <Grid container item xs = {1.5} alignItems = "center">
                            <Typography variant="h5" component="div"  >
                                Musely Website
                            </Typography>
                        </Grid>
                        <Grid container item xs={9.5} justifyContent="flex-start">


                            <Link to="/home" style={linkStyle}>
                                <Button style={{backgroundColor: isPage[0] ? '#FF7D61 ' : "#FFA778"}} color="inherit">Home</Button>
                            </Link>
                            <Link to="/home" style={linkStyle}>
                                <Button style={{backgroundColor: isPage[1] ? '#FF7D61 ' : "#FFA778"}} color="inherit">Liked Songs</Button>
                            </Link>
                            <Link to="/users" style={linkStyle}>
                                <Button style={{backgroundColor: isPage[2] ? '#FF7D61 ' : "#FFA778"}} color="inherit">Discover Users</Button>
                            </Link>

                            <Link to="/forum" style={linkStyle}>
                                <Button style={{backgroundColor: isPage[3] ? '#FF7D61 ' : "#FFA778"}} color="inherit">Forum</Button>
                            </Link>

                        </Grid>

                        <Grid container item xs={1}>
                            <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}
                                    style={{color: "black", position: "relative"}}>
                                _username_
                                <AccountCircleIcon/>
                            </Button>

                            <Menu id="basic-menu" anchorEl={anchorEl} open={open}
                                  onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
                                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>

                        </Grid>
                    </Grid>
                    </Toolbar>
            </AppBar>
        </Box>
    );
    
}

export default Navbar;