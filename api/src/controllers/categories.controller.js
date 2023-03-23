const {Category, Model} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let categories = await Category.findAll({
                include:{
                    all:true
                },
                subQuery: false,
                required:true
            });
            return res.send(categories);           
        } catch (error) {
            return res.send(error.original.sqlMessage);
        }
    },

    showOne: async (req,res) => {
        try {
            let category = await Category.findByPk(req.params.id, {include:{all:true}});
            return res.send(category);           
        } catch (error) {
            return res.send(error.original.sqlMessage);
        }
    },
    
}