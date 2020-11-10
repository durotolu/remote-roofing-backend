const server = require('./api/server');

const port = /*process.env ||*/ 4500;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port} ===\n`);
});