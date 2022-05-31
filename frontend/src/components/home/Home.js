import React from 'react';
import Navbar from '../Navbar.js';
import Button from '@mui/material/Button';
import Top_Artists from "./Top_Artists";
import Authorize from "../Authorize"

const Home = ({code}) => {
    const accessToken = Authorize(code)
    return (
        <div><div>{code}</div>
        <Navbar />
        <h1>Musely</h1>
        <h3>Top Charts</h3>
        <Top_Artists/>
        </div>

    );

};

export default Home;