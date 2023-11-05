const express = require("express");

const {
  httpGetAllLaunches,
  httpAddNewLaunch,
} = require("./launches.controllers.js");

const launchesRouter = express.Router();

launchesRouter.get("/launches", httpGetAllLaunches);
launchesRouter.post("/launches", httpAddNewLaunch);

module.exports = launchesRouter;
