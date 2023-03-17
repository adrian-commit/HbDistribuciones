const {User} = require('../database/models');
module.exports = {
    list: async (req,res) => {
        try {
            let users = await User.findAll();
            console.log('proceso finalizado');
            return res.send(users);           
        } catch (error) {
            return res.send(error.msg);
        }
    },

    showOne: async (req,res) => {
        try {
            let user = await User.findByPk(req.params.id,{include: [
                {
                    model: Team,
                    as:'teams',
                    attributes: ['name']
                }
            ]});
            return res.send(user);           
        } catch (error) {
            return res.send(error.msg);
        }
    },

    create: async (req,res) => {
        try {
            let newUser = await User.create({
                email: req.body.email,
                password: req.body.password
            })
            return res.send(newUser);
        } catch (error) {
            return res.send(error.msg);
        }
    }
}