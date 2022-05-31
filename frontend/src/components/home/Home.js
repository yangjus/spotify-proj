import React from 'react';
import Navbar from '../Navbar.js';
import Button from '@mui/material/Button';
import Top_Artists from "./Top_Artists";

const Home = () => {
    return (
        <div>
        <Navbar />
        <h1>Hello</h1>
        <Button variant="contained">
            Testing
        </Button>
        <Top_Artists/>
        </div>

    );

};

export default Home;