//Lida com as requisições e devolve respostas para o nosso FrontEnd.
const UserService = require('../services/user')();

module.exports = {
    async index(req, res) {//criando um método index , para buscar por todos os usuários.
        const users = await UserService.index();

        return res.json(users);
    },
    //async no método store, esperamos as informações do body na requisição
    async store(req, res) {//criando um método store, que servirá para armazenar um usuário. //1
        const { name, email } = req.body;//através do corpo da requisição enviaremos dois campos: o nome e email. //1

        const user = await UserService.store({ name, email });//após esperarmos o armazenamento das informações acima criamos os campos. //1

        return res.json(user)//e retornamos em formato de json todos os dados desse usuário.
    }
};


//------- SQL/Node  Relacionamento 1 para muitos. um usuário pode ter muitos endereços.