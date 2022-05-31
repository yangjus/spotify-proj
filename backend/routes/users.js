var express = require('express');
var router = express.Router();

const db = require('./firebase.js');
const { collection, getDoc, query, where, getDocs, doc, updateDoc } = require('firebase/firestore');

// accepts either doc (user) id or spotifyID as argument
router.get('/user', async (req, res, next) => {
  try {
    console.log(req.query);
    let user;
    if (req.query.userID) 
      user = await getDoc(doc(db, 'users', req.query.userID));
    else {
      const q = query(collection(db, 'users'), where('spotifyID', '==', req.query.spotifyID));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => user = doc); // should only be one user
    }
    return res.status(200).json({...user.data()})
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.put('/user', async (req, res, next) => {
  try {
    console.log(req.body);
    // TODO: set new user options
    const userPref = {};
    req.body.username ? userPref.username = req.body.username : null;
    req.body.bio ? userPref.bio = req.body.bio : null;
    req.body.profileImage ? userPref.profileImage = req.body.profileImage : null;
    req.body.public ? userPref.public = req.body.public : null;
    req.body.displayArtists ? userPref.public = req.body.public : null;
    req.body.displaySongs ? userPref.displaySongs = req.body.displaySongs : null;
    console.log(userPref);

    const userRef = doc(db, 'users', req.body.userID);
    await updateDoc(userRef, userPref);

    return res.status(201).json({message: 'success'});
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
