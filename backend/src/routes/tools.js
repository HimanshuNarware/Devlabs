const express = require("express");
const router = express.Router();

const toolController = require("../controllers/toolController");

router.post("/add", toolController.addTool);
router.get("/all", toolController.fetchAllTools);

module.exports = router;