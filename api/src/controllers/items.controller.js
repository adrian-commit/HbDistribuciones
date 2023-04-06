const {Item, Product} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let items = await Item.findAll({
                attributes:{exclude:['productId','requestId']},
                include:[
                    {
                        as:'article',
                        model: Product,
                        attributes:['name','sku']
                    }
                ]
            }); 
            return res.send(items);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let item = await Item.findByPk(req.params.id);
            return res.send(item);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newItem = await Item.create({
                price: Number(req.body.price),
                quantity: Number(req.body.quantity),
                productId : Number(req.body.productId),
                requestId: Number(req.body.requestId)
            })
            return res.send(newItem);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let item = await Item.findByPk(req.params.id);
            let data = {
                price: Number(req.body.price) ? Number(req.body.price) : item.price,
                quantity: Number(req.body.quantity) ? Number(req.body.quantity) : item.quantity,
                productId : Number(req.body.productId) ? Number(req.body.productId) : item.productId,
                requestId: Number(req.body.requestId) ? Number(req.body.requestId) : item.requestId
            }
            item.update(data);
            return res.send('Item Actualizado');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteItem: async (req,res) => {
        try {
            let item = await Item.findByPk(req.body.id);
            item.destroy();
            return res.send('Item eliminado');
        } catch (error) {
            return res.send(error);
        }
    }
}