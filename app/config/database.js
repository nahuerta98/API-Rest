//Conexión a la base de datos
const mongoose = require('mongoose');
const CONFIG = require('./config');


//Objeto
module.exports = {
    connection: null, 
    connect: function(){
        if(this.connection) return this.connection;
        return mongoose.connect(CONFIG.DB).then(connection =>{
            this.connection = connection;
            console.log('Conexión a Base de Datos Exitosa');
        }).catch(error => console.log(error));
    }

}