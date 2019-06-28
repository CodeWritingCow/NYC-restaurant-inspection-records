const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser"); // adds body object to request so app can access POST parameters
// const hbs = require('hbs')
const morgan = require("morgan"); // morgan is a HTTP request logger middleware
const compression = require("compression");
const middleware = express.Router();

middleware.use(cors());
middleware.use(morgan("dev")); // log all HTTP requests in the console
middleware.use(compression());
middleware.use(bodyParser.json());
middleware.use(bodyParser.urlencoded({ extended: true }));

let rootDirectory = path.join(__dirname, "../../");
middleware.use(express.static(rootDirectory));

module.exports = middleware;
