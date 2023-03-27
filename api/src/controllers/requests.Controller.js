const {Request} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let requests = await Request.findAll({include:{ all:true }}); 
            return res.send(requests);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let request = await Request.findByPk(req.params.id);
            return res.send(request);           
        } catch (error) {
            return res.send(error);
        }
    }
}