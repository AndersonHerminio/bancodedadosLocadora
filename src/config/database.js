//Configuração do banco de dados

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '',
    database:'sqlnode',
    define: {
        timestamps: true,//vai automaticamente entender que toda tabela no banco poussui um campo,
        // created_at, que armazena a data de criação do registro e
        // updated_at que armazena a última atualização do registro na base.
        underscored: true,//define o nome das tabelas e o nomes das colunas no formato snake_case
    },
};