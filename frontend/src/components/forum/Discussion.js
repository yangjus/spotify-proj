import React, {useEffect, useState} from "react";
import axios from "axios";
import MessageBoard from "./MessageBoard.js";
import { useLocation, useNavigate } from 'react-router-dom';
import {TextField, Button, Divider} from '@mui/material';


const Discussion = () => {
    const [allMessages, setAllMessages] = useState();
    const [content, setContent] = useState();
    const [user, setUser] = useState();
    const location = useLocation();
    const { postId, postUser, postTitle } = location.state || {};
    document.title = 'Post - ' + postTitle;
    let changeParam = window.location.pathname;
    console.log(changeParam);
    const url = window.location.href;
    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:9000/discussion/info/" + postId)
        .then((res) => res.json())
        .then((text) => setAllMessages(text.result))
        .catch((err) => console.log(err))
    }, [changeParam]);

    const refreshPage = () => {
        fetch("http://localhost:9000/discussion/info/" + postId)
        .then((res) => res.json())
        .then((text) => setAllMessages(text.result))
        .catch((err) => console.log(err))
    }

    const handleSubmit = () => {
        axios.post("http://localhost:9000/discussion/post/" + postId, {
          user: user,
          message: content
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err))
        console.log(postId);
        return navigate("/forum/");
    }

    return (
        <>
        <Divider/>
        <h2>Discussion History</h2>
        <h5>Posted by: {postUser} | Post Title: {postTitle}</h5>
        <div display="flex" justify-content="center" style={{ width: '100%', align: "center"}}>
            <MessageBoard allMessages={allMessages} />
        </div>
        <form onSubmit={handleSubmit}>
            <TextField label="Username" onChange={(e) => {setUser(e.target.value)}}></TextField>
            <TextField label="Message Content" onChange={(e) => {setContent(e.target.value)}}></TextField>
            <Button variant="contained" onClick={handleSubmit}> Submit Message </Button>
        </form>
        <br></br>
        </>
    );
};

export default Discussion;