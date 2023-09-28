// This is CommonJS + Express
const express = require("express"); // or in +ES6: import express from 'express';
const planetsRouter = require("./routes/planets/planets.router.js");

const app = express();

app.use(express.json());
app.use(planetsRouter);

module.exports = app;
