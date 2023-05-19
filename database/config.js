const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.URI || '', { logging: false });

module.exports = sequelize;