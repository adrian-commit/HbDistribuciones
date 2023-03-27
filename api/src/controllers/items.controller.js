const {Item} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let items = await Item.findAll({include:{ all:true }}); 
            return res.send(items);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let item = await Item.findByPk(req.params.id);
            return res.send(item);           
        } catch (error) {
            return res.send(error);
        }
    }
}