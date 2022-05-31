import React from 'react';
import Navbar from '../Navbar.js';
import Button from '@mui/material/Button';

document.body.style = 'background: #E6FFFF;';

const Home = () => {
    return (
        <div>
        <Navbar />
        <h1>Hello</h1>
        <Button variant="contained">
            Testing
        </Button>
        </div>

    );

};

export default Home;