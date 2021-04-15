const Database = require('./app/config/database');
const CONFIG = require ('./app/config/config');
const App = require('./app/app');

//Conexión
Database.connect();

//Puerto
App.listen(CONFIG.PORT, function(error){
    if(error) return console.log(error);
    console.log(`Servidor corriendo en el Puerto: ${CONFIG.PORT}`);
});