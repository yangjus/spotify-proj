import React, {useEffect, useState} from "react";
import Navbar from "../Navbar.js";
import axios from "axios";
import AllDiscussions from "./AllDiscussions.js";
import Discussion from "./Discussion.js";
import { Routes, Route } from 'react-router-dom';
import {Grid, Divider, TextField, Button, Box} from '@mui/material';

const Forum = () => {
    const [allPosts, setAllPosts] = useState();
    const [content, setContent] = useState();
    const [user, setUser] = useState();
    document.title = 'Forum Board';

    useEffect(() => {
        fetch("http://localhost:9000/forum/info?parameters=3")
        .then((res) => res.json())
        .then((text) => setAllPosts(text.result))
        .catch((err) => console.log(err))
    }, [])

    const handleSubmit = () => {
        axios.post("http://localhost:9000/forum/post", {
          byUser: user,
          forumName: content
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
        <Navbar ispage={[false, false, false, true]}/>
        <h1>Forum Board</h1>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Divider/>
                <h1>Forum Posts</h1>
                <div display="flex" justify-content="center" style={{ width: '100%', align: "center"}}>
                <form onSubmit={handleSubmit}>  
                    <Box textAlign='center' sx={{flexDirection: 'column', width: '25ch', m: "2rem"}}>
                        <TextField label="Username" margin="dense" size="small" width='25ch' onChange={(e) => {setUser(e.target.value)}}></TextField>
                        <TextField label="Post Title" multiline rows={4} margin="dense" size="small" style={{width: '50ch'}} onChange={(e) => {setContent(e.target.value)}}></TextField>
                        <Button variant="contained" width='30%' onClick={handleSubmit}> Submit Post </Button>
                    </Box>
                </form>
                    <AllDiscussions allPosts={allPosts} />
                </div>
            </Grid>
            <Grid item xs={6}>
                <Routes>
                <Route path=":id" element={<Discussion />} />
                </Routes>
            </Grid>
        </Grid>
        </>
    );
};

export default Forum;