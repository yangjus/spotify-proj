import React from 'react';
import Navbar from '../Navbar.js';
import Button from '@mui/material/Button';
<<<<<<< HEAD
import Authorize from "../authorization"
=======
import Top_Artists from "./Top_Artists";
import Authorize from "../Authorize"
>>>>>>> master

const Home = ({code}) => {
    const accessToken = Authorize(code)
    return (
        <div><div>{code}</div>
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