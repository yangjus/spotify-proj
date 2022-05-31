var express = require('express');
var router = express.Router();

const db = require('./firebase.js');
const { collection, getDoc, query, where, getDocs } = require('firebase/firestore');

/* GET users listing. */
router.get('/user', async (req, res, next) => {
  try {
    console.log(req.query);
    let user;
    if (req.query.id) 
      user = await getDoc(doc(db, 'users', req.query.id));
    else {
      const q = query(collection(db, 'users'))
    }
    return res.status(200).json({message: 'success'})
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
