const Sequelize = require('sequelize')
const sequelize = new Sequelize('locar', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})



module.exports = sequelize