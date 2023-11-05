const express = require("express");

const {
  httpGetAllLaunches,
  httpAddNewLaunch,
} = require("./launches.controllers.js");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);

module.exports = launchesRouter;
