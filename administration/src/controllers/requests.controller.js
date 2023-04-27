const consult = require('../modules/query');
const moment = require('moment');
module.exports = {

    list: async(req,res) => {
        try {
            // return res.send(req.body)
            let response = await consult('get', 'requests/')
            let requests = response.data.filter(r=>r.seller.id == 2)

            if (req.query) {
                if (req.query.delivery === 'send') {
                    requests = requests.filter(r=>r.send === true)
                }
                if (req.query.delivery === 'withdraw') {
                    requests = requests.filter(r=>r.send === false)
                }
                if (req.query.onlyDate && req.query.onlyDate !== "") {
                    let date = req.query.onlyDate
                    requests = requests.filter(r=>moment(r.track).isSame(date,'day'))
                }
            }
            return res.render('requests/list', {requests});  
        } catch (error) {
            return res.render('error');
        }
    },

    listBucket: async(req,res) => {
        try {
            if (!req.session.cart || req.session.cart.length === 0) {
                return res.redirect('/categories')
            }
            const request = await consult('get', 'clients/')
            const clients = request.data
            return res.render('requests/bucket', {items: req.session.cart, clients});  
        } catch (error) {
            return res.render('error');
        }
    },

    one: async (req,res)=> {
        try {
            const info = await consult('get', `requests/show/${req.params.id}`)
            const request = info.data
            return res.render('requests/show', {request});
        } catch (error) {
            return res.render('error');
        }
    },

    create: async (req,res)=> {
        try {
            // return res.send(req.body);
            const request = await consult('get', `requests/show/${req.body.newOrderId}`)
            const newRequest = request.data
            const items = newRequest.inventory
            for (const item of items) {
                const request = await consult('get', `products/show/${item.article.id}`)
                const product = request.data
                let totalStock = product.total
                let center;
                if (newRequest.send == true) {
                    center = product.quantities.find(z=> z.stockHouses.id === 1)
                } else {
                    center = product.quantities.find(z=> z.stockHouses.id === newRequest.customer.zoneId)
                }
                let centerStock = center.stock
                totalStock = totalStock - item.quantity
                centerStock = centerStock - item.quantity
                await Promise.all([
                    consult('put', `products/update/${product.id}`,{total: totalStock}),
                    consult('put', `quantities/update/${center.id}`,{stock: centerStock})
                ])
            }
            req.session.cart = []
            return res.redirect('/requests')
        } catch (error) {
            console.log('Error:', error);
            return res.render('error');
        }
    },
    
}