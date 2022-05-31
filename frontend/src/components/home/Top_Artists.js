import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ArtistListing from "./song_and_artists_components/artistListing"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

const tempList = [1,2,3,4,5,6,7,8,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];


export default function BasicGrid(props) {
    return (
        <Box>
            <Grid container spacing={2}>
                    {tempList.map(element => <Grid item xs={12/props.numCols}><ArtistListing/></Grid>)}
            </Grid>

        </Box>
    );
}