const express = require('express');
const CarsController = require('../controllers/CarsController');

const routes = express.Router();

routes.get('/users/:user_id/cars', CarsController.index);
routes.post('/users/:user_id/cars', CarsController.store);
routes.get('/users/:user_id/cars/:car_id', CarsController.show);
routes.put('/users/:user_id/cars/:car_id', CarsController.update);
routes.delete('/users/:user_id/cars/:car_id', CarsController.delete);

module.exports = routes;