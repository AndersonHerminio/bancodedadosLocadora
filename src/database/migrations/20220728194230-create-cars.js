module.exports = {

  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('cars', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING,
      },
      chassi: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },// referencia outra tabela 'users' e o campo 'id'
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  }
};
