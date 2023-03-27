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
    }

} 