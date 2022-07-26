module.exports = {
  //Método up serve para dizer o que essa migration vai realizar na base de dados.
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,//campo numérico.
        primaryKey: true,//campo de chave primária.
        autoIncrement: true,
        allowNull: false,//campo não pode ser nulo.
      },
      name: {
        type: Sequelize.STRING,//campo letras
        allowNull:false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
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

  //No método down sua função será deletar a tabela caso seja necessário.
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
