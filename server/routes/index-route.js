const express = require("express");
const controller = require("../controller/index-controller.js");
const router = express.Router();

router.get("/", controller.home);

module.exports = router;
