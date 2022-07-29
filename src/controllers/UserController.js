const user = require('../services/user');
const UserService = require('../services/user');

module.exports = {
    async index(req, res) {
        try {
            const users = await UserService.index();
    
            return res.json(users);
                       
        } catch(e) {
            return res.json(null);
        }
    },

    async store(req, res) {
        try{
            const { name, email, password } = req.body;
    
            const user = await UserService.store({ name, email, password });
    
            return res.json(user);

        } catch(e) {
           return res.status(400).json({
                errors : e.errors.map((err) => err.message)
            });
        }
    },

    async show(req, res) {
        try {
            const users = await UserService.show(req.params.id);
    
            const { id, name, email } = users;
            return res.json({ id, name, email });
                       
        } catch(e) {
            return res.json(null);
        }
    },

    async update(req, res) {
        try {
            if(!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não enviado.']
                })
            }
            const users = await UserService.update(req.params.id);

            if(!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.']
                })
            }

            const newData = await users.update(req.body);

            return res.json(newData);
                       
        } catch(e) {

            return res.status(400).json({
                errors : e.errors.map((err) => err.message)
            });
        }
    },

    async delete(req, res) {
        try {
            if(!req.params.id) {
                return res.status(400).json({
                    errors: ['ID não enviado.']
                })
            }
            const users = await UserService.delete(req.params.id);

            if(!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe.']
                })
            }

            await users.destroy();

            return res.json(users);
                       
        } catch(e) {

            return res.status(400).json({
                errors : e.errors.map((err) => err.message)
            });
        }
    },
};