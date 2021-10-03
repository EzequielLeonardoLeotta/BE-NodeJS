const express = require('express');
const routes = require('../routes/index');
const cors = require('cors');

const server = express();
server.use(express.json());

server.get('/', (_, res) => res.send('be-node-js is up!'));
server.use(cors());
server.use('', routes);

module.exports = server