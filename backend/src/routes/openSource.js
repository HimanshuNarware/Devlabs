const express = require("express");
const router = express.Router();

const openSourceController = require("../controllers/openSourceController");

router.post("/add", openSourceController.addProject);
router.get("/all", openSourceController.fetchAllProjects);

module.exports = router;