
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const session = require('express-session');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT || 3000;

        this.middlewares();
        this.routes();

    }

    middlewares(){

        this.app.use(session({
            secret: 'mySecretKey_Mike', //PUEDE SER UN JWT MAS DELANTE
            resave: false,
            saveUninitialized: false
        }));

        this.app.use(cors());

        this.app.use(express.urlencoded({extended: false}));

        this.app.use(express.json());

        //RUTAS PUBLICAS PERO DE MOMENTO NO
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello world');
        })

        this.app.use('/user', require('../routes/users.route'));
    }

    listen(){
        this.app.listen(this.port, () => console.log('Listen on port', this.port));
    }

}

module.exports = Server;