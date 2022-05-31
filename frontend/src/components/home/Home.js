import React from 'react';
import Navbar from '../Navbar.js';
import Button from '@mui/material/Button';
import Top_Artists from "./Top_Artists";
import Grid from "@mui/material/Grid";

const Home = () => {

    return (
        <div>
        <Navbar />
        <h1>Hello</h1>
        <Button variant="contained">
            Testing
        </Button>
        <Grid align ="center" justify = "center">
            <Grid>

            </Grid>
            <Grid>
            <Top_Artists numCols = {3} />
        </Grid>
        </Grid>
        </div>

    );

};

export default Home;