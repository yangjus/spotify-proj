import React, {useEffect, useState} from "react";
import Navbar from "../Navbar.js";
import axios from "axios";
import {Grid, Box} from "@mui/material";
import AllDiscussions from "./AllDiscussions.js";


const Forum = () => {
    const [allPosts, setAllPosts] = useState();
    const [content, setContent] = useState();
    const [user, setUser] = useState();

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
        <form onSubmit={handleSubmit}>
        <label>Username: </label>
            <input type="text" id="username" name="username" onChange={(e) => {setUser(e.target.value)}}></input>
            <br></br>
            <label>Post Title: </label>
            <input type="text" id="post" name="post" onChange={(e) => {setContent(e.target.value)}}></input>
            <br></br>
            <input type="submit" />
        </form>
        <div display="flex" justify-content="center" style={{ width: '100%', align: "center"}}>
            <AllDiscussions allPosts={allPosts} />
        </div>
        </>
    );
};

export default Forum;