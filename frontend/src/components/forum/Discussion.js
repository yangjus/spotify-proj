import React, {useEffect, useState} from "react";
import axios from "axios";
import MessageBoard from "./MessageBoard.js";
import { useLocation, useNavigate } from 'react-router-dom';


const Discussion = () => {
    const [allMessages, setAllMessages] = useState();
    const [content, setContent] = useState();
    const [user, setUser] = useState();
    const location = useLocation();
    const { postId, postUser, postTitle } = location.state || {};
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
        <h2>Discussion History</h2>
        <h3>Posted by: {postUser}</h3>
        <h3>Post Title: {postTitle}</h3>
        <div display="flex" justify-content="center" style={{ width: '100%', align: "center"}}>
            <MessageBoard allMessages={allMessages} />
        </div>
        <form onSubmit={handleSubmit}>
        <label>Username: </label>
            <input type="text" id="username" name="username" onChange={(e) => {setUser(e.target.value)}}></input>
            <br></br>
            <label>Message: </label>
            <input type="text" id="message" name="message" onChange={(e) => {setContent(e.target.value)}}></input>
            <br></br>
            <input type="submit" />
        </form>
        </>
    );
};

export default Discussion;