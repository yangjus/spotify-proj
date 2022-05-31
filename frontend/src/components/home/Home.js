import React from 'react';
import Navbar from '../Navbar.js';
import {Grid, Typography, Box} from '@mui/material';
import Top_Artists from "./Top_Artists";
import Authorize from "../Authorize"

const Home = ({code}) => {
    const accessToken = Authorize(code)
    return (
        <div>
        {/*<div>{code}</div>*/}
        <Navbar />
        <h1>Musely</h1>
        <h3>Top Charts</h3>
        <div style={{padding: 20}}>
            <Grid container justify="center">
                <Grid item xs={6} style={{background:'white', border:'2px solid #FFA778', borderRadius: '8px'}}>
                    <Typography variant="h3">Top Artists</Typography>
                    <br></br>
                    <Top_Artists/>
                </Grid>
                <Grid item xs={6} style={{background:'white', border:'2px solid #FFA778', borderRadius: '8px'}}>
                    <Typography variant="h3">Top Songs</Typography>
                    <br></br>
                </Grid>
            </Grid>
        </div>
        </div>

    );

};

export default Home;