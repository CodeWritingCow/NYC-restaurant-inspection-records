const express = require("express");
const controller = require("../controller/violation_report-controller.js");
const router = express.Router();

router.get("/report-violations", controller.get);

module.exports = router;
