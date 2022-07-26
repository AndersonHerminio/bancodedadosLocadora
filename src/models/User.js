//Esse model é escrito em formato de class
const { Model, DataTypes } = require('sequelize');//importando o Model e DataTypes de dentro do sequelize. //7

class User extends Model {//Criar uma class usuário que extende o Model.  //7
    static init(sequelize) {//criação do método init, método padrão do sequelize, para configuração do comportamento do Model.  //7
        super.init({
            name: DataTypes.STRING, //7
            email: DataTypes.STRING, //7
        }, {
            sequelize //passamos o objeto de configuração de conexão com o banco de dados, que por padrão tem o nome de sequelize. //7
        })
    }
    static associate(models) {//recebe por parametro todos os models da aplicação
        //tem muitos => endereço     chave estrangeira    como será nomeado
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' })
    }
}

module.exports = User; //7