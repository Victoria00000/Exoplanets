const express = require("express");

const { getAllLaunches } = require("./launches.controllers.js");

const launchesRouter = express.Router();

launchesRouter.get("/launches", getAllLaunches);

module.exports = launchesRouter;
