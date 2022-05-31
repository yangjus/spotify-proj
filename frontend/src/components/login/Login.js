import React from 'react'
import './Login.css';
import { Box, AppBar, Toolbar, Typography, TextField, Button } from '@mui/material';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <div className="Login">
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    Musely Website
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>

    <div className="LoginLabel">
      <Typography variant="h4" component="div">
          Login
      </Typography>
    </div>

      <div className="LoginButton">
        <Button variant="contained" href={AUTH_URL}> Login </Button>
      </div>
  </div>
  )
}
