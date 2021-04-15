const express = require('express');
const bodyParser = require('body-parser');

//Instancia de Express
const App = express();

const Character = require('./routes/character');

//Manejar peticiones y enviar respuestas en formato JSON
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));


//Path
App.use('/character',Character);


module.exports = App;