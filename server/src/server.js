const http = require("http"); // or in +ES6: import http from 'http';

const PORT = process.env.PORT || 8000;

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model.js");

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
