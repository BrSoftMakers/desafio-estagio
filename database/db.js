const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://wadjzbfs:PK9LRUl_kiYp-vTVzC7dS8oDhazvgOs7@babar.db.elephantsql.com/wadjzbfs', {dialect: 'postgres'});

module.exports = sequelize;