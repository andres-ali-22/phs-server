const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const Server = require('./models/server.model');

const server = new Server();

server.listen();