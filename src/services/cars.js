
const Cars = require('../models/Cars');

module.exports = {
    index(filter) {
        return Cars.findAll({
            attributes: ['model', 'chassi', 'year'],
            where: filter
        });
    },
    store(data) {
        return Cars.create(data);
    },
    show(carFilter) {
        const filter = {
            id: carFilter.car_id
        };

        return Cars.findOne({ where: filter });
    },
    update({ data, filter }) {
        return Cars.update(data, {
            where: filter
        });
    },
    delete(filter) {
        return Cars.destroy({
            where: filter
        });
    }
};