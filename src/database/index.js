const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Cars = require('../models/Cars');

const connection = new Sequelize(dbConfig);

User.init(connection);
Cars.init(connection);

Cars.associate(connection.models);

module.exports = connection;