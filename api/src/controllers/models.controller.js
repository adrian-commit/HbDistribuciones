const {ModelStock} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            console.log('no pasé')
            let modelSs = await ModelStock.findAll({include:{all:true}});
            console.log('modelSs')
            return res.send(modelSs);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let model = await ModelStock.findByPk(req.params.id);
            return res.send(model);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newModel = await ModelStock.create({
                name: req.body.name,
                categoryId: req.body.categoryId
            })
            return res.send(newModel);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let model = await ModelStock.findByPk(req.params.id);
            model.update({
                name: req.body.name ? req.body.name : model.name,
                categoryId: req.body.categoryId ? req.body.categoryId : model.categoryId
            });
            return res.send('Modelo Actualizado');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteModel: async (req,res) => {
        try {
            let model = await ModelStock.findByPk(req.body.id);
            model.destroy();
            return res.send('Modelo eliminado');
        } catch (error) {
            return res.send(error);
        }
    }
    
}