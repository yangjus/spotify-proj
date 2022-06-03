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
import nameTitle from './name.png';

const Home = ({code}) => {
    const accessToken = Authorize(code)
    document.title = "Musely - Music You Love"
    return (
        <div>
        {/*<div>{code}</div>*/}
        <Navbar ispage={[true, false, false, false]}/>
        <br></br>
        <img src={nameTitle} alt="Musely"/>
        <br></br>
        <h1>Top Charts</h1>
        <div style={{padding: 20}}>
            <Grid container justify="center">
                <Grid item xs={5.95} justify="center" align="center" style={{background:'white', border:'2px solid #FFA778', borderRadius: '8px'}}>
                    <Typography variant="h4">Top Artists</Typography>
                    <br/>
                    <TopArtists numCols = {3}/>
                </Grid>
                <Grid item xs = {0.10} />
                <Grid item xs={5.95} style={{background:'white', border:'2px solid #FFA778', borderRadius: '8px'}}>
                    <Typography variant="h4">Top Songs</Typography>
                    <TopSongs/>

                </Grid>
            </Grid>
        </div>
        </div>

    );

};

export default Home;