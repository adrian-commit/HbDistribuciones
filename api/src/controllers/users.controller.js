const {User, Team, Request} = require('../database/models');
const {hashSync, compareSync, hash} = require('bcryptjs');

module.exports = {
    list: async (req,res) => {
        try {
            let users = await User.findAll({
                attributes: {exclude:['password']},
                include:[ 
                    {
                        as: 'orders',
                        model: Request,
                        order: ['id', 'DESC']
                    },
                    {
                        as: 'teams',
                        model: Team,
                        attributes: { exclude:['teamsUsers']},
                        through: { attributes: []}
                    }
                ]
            });
            return res.send(users);           
        } catch (error) {
            console.log(error);
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let user = await User.findByPk(req.params.id,{
                attributes: {exclude:['password']},
                include:[ 
                    {
                        as: 'orders',
                        model: Request,
                        attributes: { exclude: ['clientId', 'UserId'] },
                        order: ['id', 'DESC']
                    },
                    {
                        as: 'teams',
                        model: Team,
                        attributes: { exclude:['teamsUsers']},
                        through: { attributes: []}
                    }
                ]  
            });
            return res.send(user);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newUser = await User.create({
                email: req.body.email,
                password: hashSync(req.body.password, 10) 
            })
            return res.send(newUser);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let user = await User.findByPk(req.params.id);
            user.update({
                email: req.body.email ? req.body.email : user.email,
                password: req.body.password ? hashSync(req.body.password, 12)  : user.password
            })
            return res.send('usuario Actualizado');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteUser: async (req,res) => {
        try {
            let user = await User.findByPk(req.body.id);
            user.destroy();
            return res.send('Usuario eliminado');
        } catch (error) {
            return res.send(error);
        }
    },

    access: async (req,res) => {
        let userByEmail = await User.findOne({where:{email:req.body.email}});
        if (!userByEmail) {
            return res.send('Correo no registrado');
        }
        let checkPassword = compareSync(req.body.password, userByEmail.password);
        if (!checkPassword) {
            return res.send('Credenciales incorrectas');
        } else {
            return res.send('Acceso condecido');
        }
    }
}