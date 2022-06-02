import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SongListing(props) {
    //props contains - song name, artists, album pic, album
    return(
        <div>
            <Item>
            {/* album pic, song, artists, album*/}
                <Stack direction="row" spacing={2}>
                    {/*<Item>Album Cover</Item>*/}
                    <img src = "https://upload.wikimedia.org/wikipedia/en/a/ad/Gangnam_Style_Official_Cover.png" alt = "album cover" width={64} height={64}/>
                    <h2>Song Title</h2>
                    <h2>Artist</h2>
                    <h2>Album</h2>
                </Stack>
            </Item>
        </div>
    )

}

// <Stack spacing={2}>
//     <Item>Item 1</Item>
//     <Item>Item 2</Item>
//     <Item>Item 3</Item>
// </Stack>