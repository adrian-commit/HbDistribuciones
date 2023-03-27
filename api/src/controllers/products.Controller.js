const {Product} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let products = await Product.findAll({include:{ all:true }}); 
            return res.send(products);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let product = await Product.findByPk(req.params.id);
            return res.send(product);           
        } catch (error) {
            return res.send(error);
        }
    }
}