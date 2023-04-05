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
    },

    create: async (req,res) => {
        try {
            let NewQuantity = await Quantity.create({
                stock: Number(req.body.stock),
                productId: Number(req.body.productId),
                placeId: Number(req.body.placeId) 
            })
            return res.send(NewQuantity);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let quantity = await Quantity.findByPk(req.params.id);
            quantity.update({
                stock: Number(req.body.stock) ? Number(req.body.stock) : quantity.stock,
                productId: Number(req.body.productId) ? Number(req.body.productId) : quantity.productId,
                placeId: Number(req.body.placeId) ? Number(req.body.placeId) : quantity.placeId
            });
            return res.send('Cantidad actualizada');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteQuantity: async (req,res) => {
        try {
            let quantity = await Quantity.findByPk(req.body.id);
            quantity.destroy();
            return res.send('Cantidad eliminada');
        } catch (error) {
            return res.send(error);
        }
    }
}