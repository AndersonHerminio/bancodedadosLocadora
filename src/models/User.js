const { Model, DataTypes } = require("sequelize");
const bcryptjs = require("bcryptjs");
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Name field must be between 3 and 255 characters",
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          defaultValue: "",
          unique: {
            msg: "Email already exists",
          },
          validate: {
            isEmail: {
              msg: "Invalid email",
            },
          },
        },
        password_hash: {
          type: DataTypes.STRING,
          defaultValue: "",
        },
        password: {
          type: DataTypes.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [5, 10],
              msg: "Password must be between 5 and 10 characters",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
  }
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Car, { foreignKey: 'user_id', as: 'cars' });
  }
}

module.exports = User;
