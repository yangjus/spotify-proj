import React from 'react';
import Navbar from '../Navbar.js';
import {Grid, Typography, Box} from '@mui/material';
import TopArtists from "./Top_Artists";
import TopSongs from "./Top_Songs";
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
                <Grid item xs={5.95} justify="center" align="center" style={{background:'white', border:'2px solid #FFA778', borderRadius: '8px'}}>
                    <Typography variant="h3">Top Artists</Typography>
                    <br/>
                    <TopArtists numCols = {3}/>
                </Grid>
                <Grid item xs = {0.10} />
                <Grid item xs={5.95} style={{background:'white', border:'2px solid #FFA778', borderRadius: '8px'}}>
                    <Typography variant="h3">Top Songs</Typography>
                    <br/>
                    <TopSongs/>

                </Grid>
            </Grid>
        </div>
        </div>

    );

};

export default Home;