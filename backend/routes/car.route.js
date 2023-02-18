const express = require('express')
const carRoute = express.Router()

// model
let CarModel = require('../models/Car')

carRoute.route('/create-car').post((req, res, next) => {
  CarModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

carRoute.route('/').get((req, res, next) => {
  CarModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

carRoute.route('/edit-car/:id').get((req, res, next) => {
  CarModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
carRoute.route('/update-car/:id').put((req, res, next) => {
  CarModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('Veículo atualizado com sucesso!')
      }
    },
  )
})

// Delete
carRoute.route('/delete-car/:id').delete((req, res, next) => {
  CarModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = carRoute
