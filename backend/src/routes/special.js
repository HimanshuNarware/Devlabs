const express = require("express");
const router = express.Router();
require("dotenv").config();

const specialController = require("../controllers/specialController");

router.post("/mail", specialController.sendMail);

module.exports = router;