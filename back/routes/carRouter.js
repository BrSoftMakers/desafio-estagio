const express = require('express')
const { ObjectId } = require('mongoose')
const routes = express.Router()
const mongoose = require('mongoose')
const carSchema = mongoose.Schema({
    id: {
        type: ObjectId,
        required: false,
    },
    marca: String,
    modelo: String,
    tipo: String,
    disponibilidade: Boolean,
})
const Car = mongoose.model('Car', carSchema)

routes.get('/', (req, res) => {
    Car.find().then((docs) => res.json(docs))
})
routes.post('/create', (req, res) => {
    let { marca, modelo, disponibilidade, tipo } = req.body
    let newCar = new Car({ marca, modelo, disponibilidade, tipo })
    newCar
        .save()
        .then((doc) => {
            res.json(doc)
        })
        .catch((err) => {
            console.log(err)
        })
})
routes.post('/delete/:id', (req, res) => {
    let { id } = req.params
    Car.findByIdAndDelete(id).then((doc) => {
        res.json(doc)
    })
})
routes.post('/update/:id', (req, res) => {
    let { id } = req.params
    let car = req.body
    Car.findByIdAndUpdate(id, car, {
        returnOriginal: false,
    }).then((data) => res.json(data))
})

module.exports = routes

