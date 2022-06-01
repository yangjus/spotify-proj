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
        <Navbar ispage={[true, false, false, false]}/>
        <h1>Musely</h1>
        <h2>Top Charts</h2>
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