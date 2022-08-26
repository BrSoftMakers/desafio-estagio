const Car = require('../models/Cars')

Car.sync({alter: true})

module.exports = {

    async getAllCars(req, res) {
        if(req.params.id){
            const car = await Car.findAll({where: {id: req.params.id}})
            res.json(car)
            return  
        }
        
        const cars = await Car.findAll({raw: true})
        res.json(cars)
    },

    async createCar(req, res){
       const {modelo, marca, tipo, status} = req.body.data
        
        const car = await Car.create({
            modelo,
            marca,
            tipo,
            status
        }, {raw: true})

        res.json(car)
    },

    async updateCar(req, res) {
        const id = req.params.id
        const car = await Car.update({...req.body.data}, {
            where: {
                id: id
            }
        })

        res.json(car)
    },

    async deleteCar(req, res) {
        const car = await Car.destroy({where: {id: req.params.id}})
        res.json(car)
    }

}