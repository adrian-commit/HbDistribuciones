const {Client} = require('../database/models')

module.exports = {
    list: async (req,res) => {
        try {
            let clients = await Client.findAll({include:{all:true}});
            res.json(clients);           
        } catch (error) {
            res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let client = await Client.findByPk(req.params.id);
            res.send(client);           
        } catch (error) {
            res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newClient = await Client.create({
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone
            })
            return res.send(newClient);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let client = await Client.findByPk(req.params.id);
            client.update({
                email: req.body.email ? req.body.email : client.email,
                address: req.body.address ? req.body.address : client.address,
                phone: req.body.phone ? req.body.phone : client.phone
            });
            return res.send('Cliente Actualizado');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteClient: async (req,res) => {
        try {
            let client = await Client.findByPk(req.body.id);
            client.destroy();
            return res.send('Cliente eliminado');
        } catch (error) {
            return res.send(error);
        }
    }

} 