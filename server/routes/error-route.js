const express = require('express');
const controller = require('../controller/error-controller.js');
const router = express.Router();

router.get('*', controller.get);

module.exports = router;