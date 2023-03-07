const {Category} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let categories = await Category.findAll();
            return res.send(categories);           
        } catch (error) {
            return res.send(error.msg);
        }
    },

    showOne: async (req,res) => {
        try {
            let category = await Category.findByPk(req.params.id);
            return res.send(category);           
        } catch (error) {
            return res.send(error.msg);
        }
    },
    
}