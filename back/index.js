const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const carRouter = require('./routes/carRouter.js')
const app = express()
const PORT = 8080
const mongoPass = '4lhpY2Xm9ykneBhZ'

mongoose.connect(
    `mongodb+srv://vinicius-rocha:${mongoPass}@desafio-estagio.lnswuhd.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Succesfully connected to MongoDB')
        }
    },
)

app.use(
    cors({
        origin: 'http://localhost:3000',
    }),
)
app.use('/car', express.json())
app.use('/car', carRouter)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

