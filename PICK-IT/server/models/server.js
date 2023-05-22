require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');
const path = require('path');

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
        this.app.use(express.static(path.join(__dirname, '/../uploads')));
    }

    routes(){
        this.app.use('/users', require('../routes/users.routes.js'));
        this.app.use('/products', require('../routes/product.routes.js'));
        this.app.use('/carts', require('../routes/carts.routes.js'));
		this.app.use('/wishlist', require('../routes/wishlist.routes.js'));
		this.app.use('/purchase', require('../routes/purchase.routes.js'));
    }

    listener(){
        this.app.listen(this.port, () => {
            console.log(`Listen on port ${this.port}`);
        })
    }
}

module.exports = Server;
