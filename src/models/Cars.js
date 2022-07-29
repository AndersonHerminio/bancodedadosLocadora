const { Model, DataTypes } = require('sequelize');
class Cars extends Model {
    static init(sequelize) {
        super.init({
            model: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Model field must be between 3 and 255 characters',
                    },
                },
            },
            chassi: {
                type: DataTypes.STRING,
                defaultValue: '',
                unique: {
                    msg: 'Chassi already exists'
                },
                validate: {
                    len: {
                        args: [17, 17],
                        msg: 'Chassi needs to have 17 characters',
                    },
                },
            },
            year: {
                type: DataTypes.INTEGER,
                validate: {
                    len: {
                        args: [4, 4],
                        msg: 'This year does not exist'
                    }
                }
            },
        }, {
            sequelize,
        });
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });

    }
}

module.exports = Cars;