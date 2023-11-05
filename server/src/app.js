// This is CommonJS + Express
const path = require("path");
const express = require("express"); // or in +ES6: import express from 'express';
const cors = require("cors");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.router.js");
const launchesRouter = require("./routes/launches/launches.router.js");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);
//
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
