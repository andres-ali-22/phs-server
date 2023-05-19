const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = require('../../database/config');

module.exports = sequelize.define('products', {
    idProduct: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    condition: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    category: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    publication: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    }
}, {
    // Other model options go here
    freezeTableName: true,
    paranoid: true
});