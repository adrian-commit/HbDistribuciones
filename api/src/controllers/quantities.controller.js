const {Quantity} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let quantities = await Quantity.findAll({include:{ all:true }}); 
            return res.send(quantities);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let quantity = await Quantity.findByPk(req.params.id);
            return res.send(quantity);           
        } catch (error) {
            return res.send(error);
        }
    }
}