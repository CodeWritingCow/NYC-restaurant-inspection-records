const express = require("express");
const controller = require("../controller/shuffle_image-controller.js");
const router = express.Router();

router.get("/image", controller.get);

module.exports = router;
