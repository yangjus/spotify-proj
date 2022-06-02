import * as React from "react";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import SongListing from "./song_and_artists_components/songListing";
// import * as React from "@types/react";

const tempList = [1,2,3,4,5,6,7,8,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

export default function TopSongs(props) {
    return (
        <Box sx={{ justifyContent: 'center', margin:5 }}>
            <Stack spacing={2}>
                {tempList.slice(0, 8).map(element => <SongListing/>)}
            </Stack>

        </Box>
    );
}