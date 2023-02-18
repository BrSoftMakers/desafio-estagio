const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let carSchema = new Schema({
   id: {
      type: String
   },
   modelo: {
      type: String
   },
   marca: {
      type: String
   },
   tipo: {
      type: String
   },
   situacao: {
      type: String
   },
}, {
   collection: 'cars'
})

module.exports = mongoose.model('Car', carSchema)