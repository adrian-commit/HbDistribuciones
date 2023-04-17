const {ModelStock, Product, ModelImage, Quantity, Warehouse} = require('../database/models');

module.exports = {

    list: async(req,res)=> {
        try {
            let models = await ModelStock.findAll();
            return res.send(models);
        } catch (error) {
            return res.send(error);
        }
    },

    listProducts: async (req,res) => {
        try {
            let modelSs = await ModelStock.findAll({
                where:{categoryId:req.params.id},
                attributes: { exclude: ['categoryId','class']},
                include: [
                    {
                        as:'image',
                        model:ModelImage,
                        attributes: ['img']
                    },
                    {
                        as:'products',
                        model: Product,
                        attributes: { exclude: ['discount', 'model']},
                        include: [
                            {
                                as:'quantities',
                                model: Quantity,
                                attributes: {exclude:['productId', 'placeId']},
                                include: [
                                    {as:'stockHouses', model: Warehouse, attributes:['name']}
                                ]
                            }
                        ]
                    }
                ]
            });
            console.log(modelSs)
            return res.send(modelSs);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let model = await ModelStock.findByPk(req.params.id,{
                attributes: { exclude: ['categoryId','class']},
                include: [
                    {
                        as:'image',
                        model:ModelImage,
                        attributes: ['img']
                    },
                    {
                        as:'products',
                        model: Product,
                        attributes: { exclude: ['discount', 'model']},
                        include: [
                            {
                                as:'quantities',
                                model: Quantity,
                                attributes: {exclude:['productId', 'placeId']},
                                include: [
                                    {as:'stockHouses', model: Warehouse, attributes:['name']}
                                ]
                            }
                        ]
                    }
                ]
            });
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