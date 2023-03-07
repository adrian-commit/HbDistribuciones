const {ModelStock} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let models = await ModelStock.findAll();
            return res.send(models);           
        } catch (error) {
            return res.send(error.msg);
        }
    },

    showOne: async (req,res) => {
        try {
            let model = await ModelStock.findByPk(req.params.id);
            return res.send(model);           
        } catch (error) {
            return res.send(error.msg);
        }
    },
    
}