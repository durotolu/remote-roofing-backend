const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send({ remote_roofing: 'Welcome to Remote Roofing'});
});

module.exports = server;