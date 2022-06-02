const express = require("express")
const router = express.Router()
const db = require("./firebase")
const {getDocs, addDoc, setDoc, collection, serverTimestamp, doc} = require("firebase/firestore")

router.get("/info/:id", async (req, res, next) => {
  console.log("discussion id:", req.params.id)  // shows the path params (stuff after /info/)
  let messages = [];
  // const docs = await getDocs(doc(db, "forums", req.params.id));
  const docRef = await getDocs(collection(db, `forums/${req.params.id}/messages`));

  docRef.forEach((doc) => (console.log(doc.data()), messages.push(doc.data())))
  res.json({result: messages})
})

router.post("/post/:id", async (req, res, next) => {
  let request = req.body;
  request["timeSent"] = serverTimestamp();
  await addDoc(collection(db, `forums/${req.params.id}/messages`), request);
  console.log(request)
  res.send(request)
})

/*
router.put("/edit", async (req, res, next) => {
  let id = req.body.id;
  await setDoc(doc(db, "responses", id), req.body);
})
*/

module.exports = router