const express = require('express');
const bodyParser = require('body-parser');
const search  = require('./routes/search');
const cors = require('cors');
const config = require('./config');


const server = express();

server.use(cors(
    config.application.cors.server
  ));
server.use(express.urlencoded({extended: false}))
server.use(express.json());

server.use("/api", search)

server.listen(3001, () => {
    console.log('Servidor en el puerto 3001')
})