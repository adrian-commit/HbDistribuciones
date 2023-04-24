const consult = require('../modules/query');
const {unassigned} = require('../modules/stock');
const session = require('express-session');
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
            let request2 = await consult('get', `products/show/${req.params.id}`)
            let product = request2.data
            let sinAsignar = unassigned(product)
            return res.render('products/updateStock', {product, sinAsignar});  
        } catch (error) {
            return res.render('error');
        }
    },

    create: async (req,res)=>{
        try {
            let header = 'application/json'
            let requestsZones = await consult('get', 'warehouses/')
            let request = await consult('post', 'products/create', {
                name: req.body.name,
                sku: req.body.sku,
                price: req.body.price,
                model: req.body.model,
                total: req.body.stock
            }, header)
            const product = request.data
            const zones = requestsZones.data
            for (let i = 0; i < zones.length; i++) {
                await consult('post', 'quantities/create',{
                    productId: product.id,
                    placeId: zones[i]
                },header)
            }
            return res.redirect('/products')
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
            let header = 'application/json'
            if (req.body.stock1) {
                await consult('put',`quantities/update/${req.body.id1}`,
                {stock: req.body.stock1},
                header)
            }
            if (req.body.stock2) {
                await consult('put',`quantities/update/${req.body.id2}`,
                {stock: req.body.stock2},
                header)
            }
            if (req.body.stock3) {
                await consult('put',`quantities/update/${req.body.id3}`,
                {stock: req.body.stock3},
                header)
            }
            return res.redirect('/products')
        } catch (error) {
            return res.render('error', {error})
        }
    },

    bucket: async (req,res) => {
        try {
            // return res.send(req.body)
            // const userId = req.session.user.id
            const data = new Object({
                id: req.body.id,
                img: req.body.img == null ? 'null' : req.body.img,
                name: req.body.name,
                total: req.body.total,
                price: req.body.price,
                quantity: req.body.quantity
            })
            let itemExist = true
            req.session.cart.forEach(item => {
                if (item.id == data.id) {
                    itemExist = false
                }
            });
            if (!itemExist) {
                return res.json({ error: 'El ítem ya existe en el carrito.' });
            } else {
                req.session.cart.push(data)
            }
            return res.send(req.session.cart);           
        } catch (error) {
            return res.send(error);
        }
    },
}