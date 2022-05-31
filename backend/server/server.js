const express = require('express');
const SpotifyWebAPI = require('spotify-web-api-node');
const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyAPI = new SpotifyWebAPI({
        redirectURI: 'http://localhost:3000',
        clientID: '5055a87749ee4757a31905071a589dba',
        clientSecretID: '55debd78f95448318815576faddb8d59'
    })

    spotifyAPI.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
})