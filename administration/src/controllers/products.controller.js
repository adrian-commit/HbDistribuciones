const consult = require('../modules/query');
const {unassigned} = require('../modules/stock');
module.exports = {

    list: async(req,res) => {
        try {
            let request1 = await consult('get','products/')
            let request2 = await consult('get','categories/')
            let products = request1.data
            let categories = request2.data
            let sinAsignar = products.map(product => new Object({
                id: product.id,
                notAssigned: unassigned(product)
            }));
            return res.render('products/list', {products, categories, sinAsignar}); 
        } catch (error) {
            return res.render('error');
        }
    },

    newProduct: async(req,res) => {
        try {
            let response1 = await consult('get', 'categories/');
            let categories = response1.data;
            return res.render('products/create', {categories});  
        } catch (error) {
            return res.render('error');
        }
    },

    show: async(req,res) => {
        try {
            let request1 = await consult('get', `products/show/${req.params.id}`)
            let product = request1.data
            let request2 = await consult('get', `categories/show/${product.template.categoryId}`)
            let category = request2.data
            return res.render('products/updatePrice', {product, category});  
        } catch (error) {
            return res.render('error');
        }
    },

    showStock: async(req,res) => {
        try {
            let request1 = await consult('get', 'warehouses/')
            let zones = request1.data
            let request2 = await consult('get', `products/show/${req.params.id}`)
            let product = request2.data
            let sinAsignar = unassigned(product)
            return res.render('products/updateStock', {zones,product, sinAsignar});  
        } catch (error) {
            return res.render('error');
        }
    },

    create: async (req,res)=>{
        try {
            let header = 'application/json'
            let request = await consult('post', 'products/create', {
                name: req.body.name,
                sku: req.body.sku,
                price: req.body.price,
                model: req.body.model,
                total: req.body.stock
            }, header)
            let product = request.data
            return res.redirect('products/')
        } catch (error) {
            return res.render('error', {error})
        }
    },

    upgrade: async (req,res)=>{
        try {
            let header = 'application/json'
            await consult('put', 'products/update', {
                id: req.body.id,
                name: req.body.name,
                price: req.body.price
            }, header)
            return res.redirect('/products')
        } catch (error) {
            return res.render('error', {error})
        }
    },

    upgradeStock: async (req,res)=>{
        try {
            return res.send(req.body)
            let header = 'application/json'
            await consult('put', 'products/update', {
                id: req.body.id,
                name: req.body.name,
                price: req.body.price
            }, header)
            return res.redirect('/products')
        } catch (error) {
            return res.render('error', {error})
        }
    },
}