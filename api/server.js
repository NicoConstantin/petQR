//IMPORTS
require ('dotenv');
const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/routes.js');
const errorHandler = require ('./src/middlewares/errorHandler.js');
const setHeaders = require ('./src/middlewares/setHeaders.js');
const { PORT } = require ('./src/config/config.js');
const {connectDB} = require('./db.js');

//CODE
const server = express();
server.name = 'Musure-Server';
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(morgan('dev'));

server.use(setHeaders);
server.use('/', routes);
server.use(errorHandler);


connectDB()
.then(() => server.listen(PORT, () => console.log(`SERVER ON! Listening at ${PORT}`)))
.catch(console.dir);

module.exports = server