const {Client} = require('../database/models')

module.exports = {
    list: async (req,res) => {
        try {
            let clients = await Client.findAll();
            res.json(clients);           
        } catch (error) {
            res.send(error.msg);
        }
    },

    showOne: async (req,res) => {
        try {
            let client = Client.findByPk(req.params.id);
            res.send(client);           
        } catch (error) {
            res.send(error.msg);
        }
    }

} 