const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const AddressRouter = require('../addresses/addresses-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/address', AddressRouter);

server.get('/', (req, res) => {
  res.send({ remote_roofing: 'Welcome to Remote Roofing'});
});

module.exports = server;