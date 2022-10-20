/*
(async () => {
    const database = require('./db.js');
    const Vehicle = require('./vehicle.js');

    try {
        const result = await database.sync();
        console.log(result);

        const resultCreate = await Vehicle.create({
            model: 'Corsa 2015',
            brand: 'Chevrolet',
            availability: true
        })
        console.log(resultCreate);

        const vehicles = await Vehicle.findAll();
        console.log(vehicles);

    } catch (error) {
        console.log(error);
    }
})();
*/

const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database/db.js');
const Vehicle = require('./models/vehicle.js');
const { response, request } = require('express');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'Hello World!' })
  });

app.get('/api/vehicles', (request, response) => {
    Vehicle.findAll().then((vehicles) => {
        response.json(vehicles);
    });
});

app.get('/api/vehicles/:id', (request, response) => {
    let id = request.params.id;

    Vehicle.findByPk(id).then((vehicle) => {
        if (vehicle) {
            response.json(vehicle);
        } else {
            response.status(404).send(); 
        }

    });
});

app.post('/api/vehicles', (request, response) => {
    Vehicle.create({
        model: request.body.model,
        brand: request.body.brand,
        availability: request.body.availability
    }).then((vehicle) => {
        response.json(vehicle);
    });
});

app.delete('/api/vehicles/:id', (request, response) => {
    let id = request.params.id;

    Vehicle.findByPk(id).then((vehicle) => {
        if (vehicle) {
            vehicle.destroy().then( () => {
                response.status(204).send();
            })
        } else {
            response.status(404).send(); 
        }

    });
});

app.put('/api/vehicles/:id', (request, response) => {
    const id = request.params.id;
    const { model, brand, availability} = request.body;

    Vehicle.findByPk(id).then( (vehicle) => {
        if (vehicle) {
            vehicle.update({model, brand, availability}).then( () => {
                response.status(204).send();
            })
        } else {
            response.status(404).send(); 
        }
        
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});