const {ModelStock} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            console.log('no pasé')
            let modelSs = await ModelStock.findAll({include:{all:true}});
            console.log('modelSs')
            return res.send(modelSs);           
        } catch (error) {
            return res.send(error.original.sqlMessage);
        }
    },

    showOne: async (req,res) => {
        try {
            let model = await ModelStock.findByPk(req.params.id);
            return res.send(model);           
        } catch (error) {
            return res.send(error.original.sqlMessage);
        }
    },
    
}