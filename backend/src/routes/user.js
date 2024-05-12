const express = require("express");
const {
  newUser,
  signIn,
  addBookmark,
} = require("../controllers/userController");
const router = express.Router();

router.post("/signup", newUser);
router.post("/signin", signIn);
router.post("/new/bookmark", addBookmark);

router.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured..!" } = err;
  res.status(status).send(message);
});

module.exports = router;
