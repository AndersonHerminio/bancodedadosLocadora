
const User = require('../models/User');

module.exports = {
    index() {
        return User.findAll();
    },

    store(data) {
        return User.create(data);
    }
};