const express = require('express');
const cors = require('cors');

const sequelize = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8082;

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    async conectarDB() {
        try {
            // await sequelize.sync({ force: true });
            await sequelize.sync();
            await sequelize.authenticate();
            console.log('Se estableció conexion con base de datos.');
        } catch (error) {
            console.error('Imposible conectarse a DB error: ', error);
        }
    }


    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

    }

    routes() {
        const api = '/api';
        this.app.use(api + '/product', require('../routes/products/product.route'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }

}




module.exports = Server;