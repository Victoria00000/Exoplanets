const express = require("express");

const planetsController = require("./planets.controllers.js");

const planetsRouter = express.Router();

planetsRouter.get("/planets", planetsController.getAllPlanets);

module.exports = planetsRouter;
