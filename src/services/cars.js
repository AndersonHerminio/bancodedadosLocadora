
const Cars = require('../models/Cars');

module.exports = {
    index(data) {
        return Cars.findAll({
            attributes: ['model', 'chassi', 'year'],
            where: data
        });
    },
    store(data) {
        return Cars.create(data);
    },
    show(carData) {
        const data = {
            id: carData.car_id
        };

        return Cars.findOne({ where: data });
    },
    update({ data, filter }) {
        return Cars.update(data, {
            where: filter
        });
    },
    delete(data) {
        return Cars.destroy({
            where: data
        });
    }
};