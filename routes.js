const express = require('express');
const route = express.Router();
// const homeController = require('./src/controllers/homeController');
// const contatoController = require('./src/controllers/contatoController');
const carroController = require('./src/controllers/carroController');

// Rotas da home
route.get('/', carroController.lista);
route.post('/cadastro', carroController.cadastro);
route.post('/carros/edit/:id', carroController.edit);
route.get('/carros/delete/:id', carroController.delete);

// Rotas de contato
// route.get('/contato', contatoController.paginaInicial);


module.exports = route;
