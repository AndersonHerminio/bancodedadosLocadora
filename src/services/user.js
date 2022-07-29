
const User = require('../models/User');

module.exports = {
    index() {
        return User.findAll({ attributes: ['id', 'name', 'email'] });
    },

    store(data) {
        return User.create(data);
    },

    show(data) {
        return User.findByPk(data);
    },

    update(data) {
        return User.findByPk(data);
    },

    delete(data) {
        return User.findByPk(data);
    }
};