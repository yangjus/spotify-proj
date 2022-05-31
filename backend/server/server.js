const express = require('express');
const SpotifyWebAPI = require('spotify-web-api-node');
const app = express();

app.post('/login', (req, res) => {
    const conde = req.body.code
    const spotifyAPI = new SpotifyWebAPI({
        redirectURI: 'httpL//localhost:3000',
        clientID: '5055a87749ee4757a31905071a589dba',
        clientSecretID: '55debd78f95448318815576faddb8d59'

    })
    spotifyAPI.authorizeCodeGrant(code).then(data=> {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
})