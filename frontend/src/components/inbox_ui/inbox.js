import * as React from "react";
import List from '@mui/material/List';
import Listing from "./listing";
import Chat from "./chat";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import Divider from '@mui/material/Divider';


export default function Inbox(props) {

    return(
      <div>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  <Grid xs ={4}>
                      <h1>Messages</h1>
                      <Button variant="contained" endIcon={<MessageIcon />}>
                         Start Chat
                      </Button>
                      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {/*  map this eventually*/}
                        <Listing name = "Bob Bob" header="memes" avatar="/static/images/avatar/1.jpg" msg="— I like songs!"/>
                        <Listing name = "Joe Schmoe" header = "memes" avatar = "/static/images/avatar/1.jpg" msg = "— I'll be in your neighborhood doing errands this morning"/>


                      </List>
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid xs={7}>
                    <Chat name={"Bob"}/>

                  </Grid>
              </Grid>
          </Box>


      </div>
    );
}