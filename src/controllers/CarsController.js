const CarsService = require('../services/cars');

module.exports = {
    async index(req, res) {
        try {
            const filter = {
                user_id: req.params.user_id,
            }

            const cars = await CarsService.index(filter);
    
            return res.json(cars);
                       
        } catch(e) {
            return res.json(null);
        }
    },

    async store(req, res) {
        try{
            const data = {
                model: req.body.model,
                chassi: req.body.chassi,
                year: req.body.year,
                user_id: req.params.user_id,
            }

            const cars = await CarsService.store(data);
    
            return res.json(cars);

        } catch(e) {
            return res.status(400).json({
               error: 'chassis in use',
            });
        }
    },

    async show(req, res) {
        try {
            const filter = {
                car_id: req.params.car_id
            };

            const car = await CarsService.show(filter);
    
            return res.json(car);
        } catch(e) {
            return res.json(null);
        }
    },

    async update(req, res) {
        try {
            if(!req.params.car_id) {
                return res.status(400).json({
                    errors: ['ID do carro não enviado.']
                })
            }

            const options = {
                data: req.body,
                filter: {
                    id: req.params.car_id
                }
            };

            const updatedCar = await CarsService.update(options);

            return res.json(updatedCar);
        } catch(e) {
            return res.json(null);
        }
    },

    async delete(req, res) {
        try {
            if(!req.params.car_id) {
                return res.status(400).json({
                    errors: ['ID do carro não enviado.']
                })
            }

            const filter = {
                id: req.params.car_id
            };

            await CarsService.delete(filter);

            return res.json(filter);
        } catch(e) {
            return res.json(null);
        }
    },
};