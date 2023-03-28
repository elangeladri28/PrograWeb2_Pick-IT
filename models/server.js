require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //CONECTAR A BASE DE DATOS
        this.conectarDB();

        //MIDDLEWARES
        this.middlewares();

        //RUTAS DE LA APP
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use( express.json() );
    }

    routes(){
        this.app.use('/users', require('../routes/users.route.js'));
    }

    listener(){
        this.app.listen(this.port, () => {
            console.log(`Listen on port ${this.port}`);
        })
    }
}

module.exports = Server;