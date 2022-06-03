import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SongListing(props) {
    let artists = "";
    props.listing.artists.map(artist => artists += (String(artist.name)  +", "));
    artists = artists.slice(0,artists.length-2);
    return(
        <div>
            <Item>
                <Stack direction="row" spacing={2}>
                    <Grid container spacing={1}>
                        <Grid item xs = {2}>
                            <img src = {props.listing.album.images[2].url} alt = "album cover" width={64} height={64}/>
                        </Grid>
                        <Grid item xs = {4}>
                            <h3>{props.listing.name}</h3>
                        </Grid>
                        <Grid item xs = {4}>
                            {/*{props.listing.artists.map(artist => artists += (String(artist.name)  +" "))}*/}
                            <p>{artists}</p>
                        </Grid>
                        <Grid item xs = {2}>
                            <h4>{props.listing.album.name}</h4>
                        </Grid>
                    </Grid>
                </Stack>
            </Item>
        </div>
    )
}