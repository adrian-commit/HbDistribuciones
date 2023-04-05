const {ModelStock, Product,ProductImage} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let modelSs = await ModelStock.findAll({
                attributes: { exclude: ['categoryId','class']},
                include: [
                    {
                        as:'products',
                        model: Product,
                        attributes: { exclude: ['discount', 'model']},
                        include: [
                            {
                            as:'image',
                            model:ProductImage,
                            attributes: ['img']
                            }
                        ]
                    }
                ]
            });
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
                categoryId: Number(req.body.categoryId)
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
                categoryId: Number(req.body.categoryId) ? Number(req.body.categoryId) : model.categoryId
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