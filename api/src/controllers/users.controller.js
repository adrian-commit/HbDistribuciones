const {User, Team, Request, Client} = require('../database/models');
const {hashSync, compareSync} = require('bcryptjs');
const {comission} = require('../modules/comission')
const { Op } = require('sequelize');
const moment = require('moment');

module.exports = {

    search: async (req, res) => {
        try {
            const {search} = req.query;
            const day = moment().startOf('day')

            const response = await User.findAll({
                where:{
                    userName:{[Op.like]: '%' + search + '%'}
                },
                attributes:{exclude:['password']},
                include:[
                    {as:'orders',model:Request},
                    {as:'teams',model:Team,where:{level:2}}
                ]
            });

            const users = response.map(user=> new Object({
                id:user.id,
                userName:user.userName,
                email:user.email,
                comission:user.comission,
                ordersLength:user.orders.filter(order=>{
                    moment(order.track).isAfter(day) == true
                }).length
            }))

            return res.send(users);
        } catch (error) {
            res.status(500).send({ message: "Error al realizar la búsqueda" });
        }
    },

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
            return res.send(error);
        }
    },

    sellers:  async (req,res) => {
        try {
            const day = moment().startOf('day')
            let data = await User.findAll({
                attributes: {exclude:['password']},
                include:[ 
                    {as: 'orders',model: Request},
                    {as: 'teams',model: Team,where:{level:2}}
                ]
            });
            const users = data.map(user=> new Object({
                id:user.id,
                userName:user.userName,
                email:user.email,
                comission:user.comission,
                ordersLength:user.orders.filter(order=>{
                    moment(order.track).isAfter(day) == true
                }).length
            }))
            return res.send(users);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let data = await User.findByPk(req.params.id,{
                attributes: {exclude:['password']},
                include:[ 
                    {
                        as: 'orders',
                        model: Request,
                        attributes: { exclude: ['clientId', 'UserId'] },
                        include:[
                            {as:'customer',model:Client,attributes:['name','zoneId']}
                        ],
                        order: ['id', 'DESC']
                    },
                    {as:'teams',model:Team}
                ]  
            });
            const user = new Object({
                id:data.id,
                userName:data.userName,
                email:data.email,
                comission:data.comission,
                teams: data.teams,
                ordersLength:data.orders.length,
                total: comission(data.orders, data.comission),
                orders: data.orders
            })
            
            return res.send(user);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newUser = await User.create({
                userName: req.body.userName,
                email: req.body.email,
                password: hashSync(req.body.password, 10),
                avatar: req.body.avatar ? req.body.avatar : 'avatar-male.svg',
                phone: Number(req.body.phone) ? Number(req.body.phone) : 0,
                comission: req.body.comission ? Number(req.body.comission) : 0
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
        console.log(req.body)
        let userByEmail = await User.findOne({where:{email:req.body.email}});
        let check = !userByEmail ? false : compareSync(req.body.pass, userByEmail.password) ? userByEmail.id : false;
        return res.send(`${check}`);
    }

}