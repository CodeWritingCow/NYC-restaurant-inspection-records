const express = require("express");
const controller = require("../controller/search-controller.js");
const router = express.Router();

router.get("/search", controller.get);
router.post("/search", controller.post);

module.exports = router;
