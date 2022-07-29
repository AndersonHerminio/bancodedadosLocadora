const express = require('express');
const UserController = require('../controllers/UserController');
const TokenController = require('../controllers/TokenController');
const loginRequired = require('../middlewares/loginRequired');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', loginRequired, UserController.index);
routes.get('/users/:id', loginRequired, UserController.show);
routes.put('/users/:id', loginRequired, UserController.update);
routes.delete('/users/:id', loginRequired, UserController.delete);

routes.post('/tokens', TokenController.store);

module.exports = routes;