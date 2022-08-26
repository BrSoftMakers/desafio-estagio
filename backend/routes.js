const express = require('express')
const CarController = require('./controllers/CarController')
const bodyParser = require('body-parser')
const routes = new express.Router()

routes.use(bodyParser.urlencoded({extended: true}))

routes.get('/veiculos/:id?', CarController.getAllCars)
routes.post('/veiculos', CarController.createCar)
routes.patch('/veiculos/:id', CarController.updateCar)
routes.delete('/veiculos/:id', CarController.deleteCar)


module.exports = routes