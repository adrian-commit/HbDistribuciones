const {Product, ModelStock, ModelImage, Quantity, Warehouse} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let products = await Product.findAll({
                attributes: { exclude: ['discount']},
                include: [
                    {
                        as:'template',
                        model:ModelStock,
                        attributes: {exclude:['name','categoryId']},
                        include: [
                            {as:'image',model:ModelImage,attributes:['img']}
                        ]
                    },
                    {
                        as:'quantities',
                        model: Quantity,
                        attributes: {exclude:['productId', 'placeId']},
                        include: [
                            {as:'stockHouses', model: Warehouse, attributes:['name']}
                        ]
                    }   
                ],
                order:[['id','DESC']]
            }); 
            return res.send(products);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let product = await Product.findByPk(req.params.id,{
                attributes: { exclude: ['discount', 'model']},
                include: [
                    {
                        as:'template',
                        model:ModelStock,
                        include: [
                            {as:'image',model:ModelImage,attributes:['img']}
                        ]
                    },
                    {
                        as:'quantities',
                        model: Quantity,
                        attributes: {exclude:['productId', 'placeId']},
                        include: [
                            {as:'stockHouses', model: Warehouse, attributes:['id','name']}
                        ]
                    }
                ]
            });
            return res.send(product);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newProduct = await Product.create({
                name: req.body.name,
                sku: req.body.sku,
                price: Number(req.body.price),
                model: Number(req.body.model),
                total: Number(req.body.total)
            })
            return res.send(newProduct);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let product = await Product.findByPk(req.body.id);
            product.update({
                name: req.body.name ? req.body.name : product.name,
                sku: req.body.sku ? req.body.sku : product.sku,
                discount: req.body.discount ? req.body.discount : product.discount,
                price: Number(req.body.price) ? Number(req.body.price): product.price,
                model: Number(req.body.model) ? Number(req.body.model) : product.model,
                total: Number(req.body.stock) ? Number(req.body.stock) : product.total
            });
            return res.send('Producto Actualizado');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteProduct: async (req,res) => {
        try {
            let product = await Product.findByPk(req.body.id);
            product.destroy();
            return res.send('Producto eliminado');
        } catch (error) {
            return res.send(error);
        }
    }
}