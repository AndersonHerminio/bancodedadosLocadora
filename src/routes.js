//ARQUIVO DE ROTAS
const express = require('express');//importando express     //1
const UserController = require('./controllers/UserController')//2

const routes = express.Router();        //1

routes.get('/users', UserController.index);//pegar index que será o método do meu conltroller
routes.post('/users', UserController.store);

module.exports = routes;// EXPORTANDO O QUE TEM DENTRO DE ROTAS E IMPORTANDO EM SERVER.JS       //1-2