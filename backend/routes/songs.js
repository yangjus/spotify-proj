const express = require('express');
const router = express.Router();
const axios = require('axios');

// requires auth key
router.get('/me', async (req, res, next) => {
	try {
		if (!req.query.AUTH_KEY)
			throw 'AUTH_KEY required to make Spotify API request';
		const AUTH_KEY = req.query.AUTH_KEY;

		const TOP_SONGS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
		await axios.get(TOP_SONGS_ENDPOINT, {
			headers: {
				Authorization: `Bearer ${AUTH_KEY}`
			}
		})
			.then((response) => res.status(200).json(response.data))
			.catch((error) => {
				res.status(500).send(error)});
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;