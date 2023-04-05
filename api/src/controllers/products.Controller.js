const {Product} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let products = await Product.findAll({include:{ all:true }}); 
            return res.send(products);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let product = await Product.findByPk(req.params.id);
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
                model: Number(req.body.model) 
            })
            return res.send(newProduct);
        } catch (error) {
            return res.send(error);
        }
    },

    update: async (req,res) => {
        try {
            let product = await Product.findByPk(req.params.id);
            product.update({
                name: req.body.name ? req.body.name : product.name,
                sku: req.body.sku ? req.body.sku : product.sku,
                discount: req.body.discount ? req.body.discount : product.discount,
                price: Number(req.body.price) ? Number(req.body.price): product.price,
                model: Number(req.body.model) ? Number(req.body.model) : product.model
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