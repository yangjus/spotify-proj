import React from 'react';
import Navbar from '../Navbar.js';
import {Grid, Typography, Box} from '@mui/material';
import TopArtists from "./Top_Artists";
import TopSongs from "./Top_Songs";
import Authorize from "../authorization"
import Button from '@mui/material/Button';
import Top_Artists from "./Top_Artists";
import DisplayPlaylists from "../playlist/DisplayPlaylists"
import GetUserName from '../username/GetUserName';
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
                <Grid item xs={5.95} justify="center" align="center" style={{background:'white', border:'2px solid #FFA778', borderRadius: '8px'}}>
                    <Typography variant="h3">Top Artists</Typography>
                    <br/>
                    <TopArtists numCols = {3}/>
                </Grid>
                <Grid item xs = {0.10} />
                <Grid item xs={5.95} style={{background:'white', border:'2px solid #FFA778', borderRadius: '8px'}}>
                    <Typography variant="h3">Top Songs</Typography>
                    <TopSongs/>

                </Grid>
            </Grid>
        </div>

        <DisplayPlaylists />
        <GetUserName />
        </div>

    );

};

export default Home;