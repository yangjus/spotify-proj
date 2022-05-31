import React from 'react';
import Navbar from '../Navbar.js';
import Button from '@mui/material/Button';
import Authorize from "../Authorize"

document.body.style = 'background: #E6FFFF;';

const Home = ({code}) => {
    const accessToken = Authorize(code)
    return (
        <div><div>{code}</div>
        <Navbar />
        <h1>Hello</h1>
        <Button variant="contained">
            Testing
        </Button>
        </div>

    );

};

export default Home;