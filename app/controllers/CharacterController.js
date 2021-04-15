const character = require('../models/character');
const Character = require('../models/character');

//Listar todos los personajes
function index(req, res){
    Character.find({})
        .then(characters =>{
            if(characters.length) return res.status(200).send({characters});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
        //then: Promesa; 
}

function show(req, res){
    if(req.body.error) return res.status(500).send({error});
    if (!req.body.characters) return res.status(404).send({message:'NOT FOUND'});
    let characters = req.body.characters;
    return res.status(200).send({characters});
    

}

//Req => manejar la peticion
//Res => responder la peticion 
//Next => ejecutar la siguiente funcion 
function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value;
    Character.find(query).then(characters =>{
        //Si no hay personajes, simplemente pasa.
        if(!characters.length) return next();
        //Si hay, lo guarda en req.body y paso.
        req.body.characters = characters;
    }).catch( error => {
        req.body.error = error;
        next();
    });
}

module.exports = {
    index, 
    show,
    find
}