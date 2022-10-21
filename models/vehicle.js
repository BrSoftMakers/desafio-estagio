const Sequelize = require('sequelize');
const database = require('./../database/db.js');

const Vehicle = database.define('vehicle', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    availability: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
    
});

module.exports = Vehicle;