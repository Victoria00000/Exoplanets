const http = require("http"); // or in +ES6: import http from 'http';

const PORT = process.env.PORT || 8000;

const app = require("./app");

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
