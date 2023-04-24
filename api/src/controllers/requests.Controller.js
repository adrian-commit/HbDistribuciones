const {Request, Item, Product, Client, User} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let requests = await Request.findAll({
                attributes:{exclude:['clientId','UserId']},
                include:[
                    {
                        as:'inventory',
                        model: Item,
                        attributes:{exclude:['requestId','productId']},
                        include:[
                            {as:'article',model: Product, attributes:['id','name']}
                        ]
                    },
                    {as:'customer', model:Client},
                    {as:'seller', model:User}
            ]}); 
            return res.send(requests);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let request = await Request.findByPk(req.params.id,{
                attributes:{exclude:['clientId','UserId']},
                include:[
                    {
                        as:'inventory',
                        model: Item,
                        attributes:{exclude:['requestId','productId']},
                        include:[
                            {as:'article',model: Product, attributes:['id','name']}
                        ]
                    },
                    {as:'customer', model:Client},
                    {as:'seller', model:User}
            ]});
            return res.send(request);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newRequest = await Request.create({
                track: req.body.track,
                total: Number(req.body.total),
                send: req.body.send,
                status: Number(req.body.status),
                clientId : Number(req.body.clientId),
                UserId: Number(req.body.userId)
            })
            return res.send(newRequest);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let request = await Request.findByPk(req.params.id);
            let data = {
                track: req.body.track ? req.body.track : request.track,
                comission: Number(req.body.comission) ? Number(req.body.comission) : request.comission,
                total: Number(req.body.total) ? Number(req.body.total) : request.total,
                send: req.body.send == true ? true : false,
                status: Number(req.body.status) ? Number(req.body.status) : request.status,
                clientId : Number(req.body.clientId) ? Number(req.body.clientId) : request.clientId,
                UserId: Number(req.body.userId) ? Number(req.body.userId) : request.userId
            }
            request.update(data);
            return res.send('Pedido Actualizado');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteRequest: async (req,res) => {
        try {
            let request = await Request.findByPk(req.body.id);
            request.destroy();
            return res.send('Pedido eliminado');
        } catch (error) {
            return res.send(error);
        }
    }
}