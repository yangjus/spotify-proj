import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function ArtistListing(props){
    //artist image, name
    let imgSize = 200;
    return (
        <div>
        <Card sx={{ maxWidth: imgSize }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height= {String(imgSize)}
                image = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e1d32dd2-8193-4657-9769-fb4b275be811/d5s9hoi-d6fcef40-7749-45d7-95c5-0b72e1a7c4af.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UxZDMyZGQyLTgxOTMtNDY1Ny05NzY5LWZiNGIyNzViZTgxMVwvZDVzOWhvaS1kNmZjZWY0MC03NzQ5LTQ1ZDctOTVjNS0wYjcyZTFhN2M0YWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6y9GKyRkNmmekSR1baTWnsUITVuS3O01FJgljQ5yJ2k"
            />
            <CardContent>
                Artist Name
            </CardContent>
        </Card>
        </div>
    );
}