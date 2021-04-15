const express = require('express');
const CharacterCtrl = require('../controllers/CharacterController');

const Router = express.Router();

//Configuracion Router
//Metodos por los cuales se va a acceder
//URLS a las que se pueden acceder

Router.get('/', CharacterCtrl.index) // api.com/character/
        //.get('/character/id', CharacterCtrl.find, CharacterCtrl.show) // api.com/character/id
        




module.exports = Router;