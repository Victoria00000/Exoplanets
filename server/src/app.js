// This is CommonJS + Express
const path = require("path");
const express = require("express"); // or in +ES6: import express from 'express';
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router.js");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);

module.exports = app;
