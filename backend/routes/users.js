var express = require('express');
var router = express.Router();

const db = require('./firebase.js');
const { collection, getDoc, query, where, getDocs, doc, updateDoc, addDoc, deleteDoc } = require('firebase/firestore');

// returns all existing users
router.get('/', async (req, res, next) => {
  const users = {};
  try {
    getDocs(collection(db, 'users'))
      .then((docs) => {
        const userList = [];
        docs.forEach((doc) => userList.push({...doc.data()}));
        users.users = userList;
        return res.status(200).json(users);
      })
  } catch (error) {
    return res.status(500).send(error);
  }
});

// accepts either doc id (userID) or spotifyID as query
router.get('/user', async (req, res, next) => {
  try {
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
    return res.status(500).send(error);
  }
});

// only accepts userID to find user, not spotifyID
router.put('/user', async (req, res, next) => {
  try {
    if (req.body.spotifyID)
      throw 'do not include a spotifyID in request as it\'s meant to be immutable';
    // copy everything except the userID
    const {userID, ...userPref} = req.body;
    const userRef = doc(db, 'users', userID);
    await updateDoc(userRef, userPref);

    return res.status(201).json({message: 'success'});
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/user', async (req, res, next) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), req.body); 
    return res.status(201).json({message: `user added with id ${docRef.id}`});
  } catch (error) {
    return res.status(500).send(error);
  }
});

// accepts either doc id (userID) or spotifyID as query
router.delete('/user', async (req, res, next) => {
  try {
    console.log(req.query);
    if (req.query.userID)
      await deleteDoc(doc(db, 'users', req.query.userID));
    else {
      const q = query(collection(db, 'users'), where('spotifyID', '==', req.query.spotifyID));
      const querySnapshot = await getDocs(q);
      let userID;
      querySnapshot.forEach((doc) => userID = doc.id);
      deleteDoc(doc(db, 'users', userID));
    }
    return res.status(200).json({message: 'user successfully deleted'})
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;