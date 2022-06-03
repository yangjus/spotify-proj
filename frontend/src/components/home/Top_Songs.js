import * as React from "react";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import SongListing from "./song_and_artists_components/songListing";
import {useState, useEffect} from "react";
import axios from "axios";

const tempList = [1,2,3,4,5,6,7,8,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];



export default function TopSongs(props) {
    const [data, setData] = useState({});

    let num = props.num?props.num:12;

    const getTopSongs = (num) => {
        axios.get('/songs/me/', { params: { AUTH_KEY: localStorage.getItem("accessToken") } })
            .then(response => setData(response.data));
    }

    useEffect(() => {
        getTopSongs(num);
        console.log(data);
    }, []);

    return (
        <Box sx={{ justifyContent: 'center', margin:5 }}>
            <Stack spacing={2}>
                {tempList.slice(0, 8).map(element => <SongListing/>)}
            </Stack>

        </Box>
    );
}