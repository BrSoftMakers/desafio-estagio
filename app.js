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

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    Vehicle.findAll().then((vehicles) => {
        response.json(vehicles);
    });
    //response.json({ info: 'Node.js, Express, Sequelize and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})