//Arquivo responsável em fazer a conexão da minha base de dados.

const Sequelize = require('sequelize');//importar o Sequelize, está com S maiusculo pois se trata de uma class.
const dbConfig = require('../config/database');//importar a config.

const User = require('../models/User');//importando o models
const Address = require('../models/Address');//importando o models
const Tech = require('../models/Tech');//importando o models

const connection = new Sequelize(dbConfig);//fazendo a conexão com o banco de dados.

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;//ja deixo preparada a exportação caso eu precise usar em outro arquivo.