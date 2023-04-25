const consult = require('../modules/query');
module.exports = {

    list: async(req,res) => {
        try {
            let response = await consult('get', 'requests/')
            let requests = response.data.filter(r=>r.seller.id == 2)
            return res.render('requests/list', {requests});  
        } catch (error) {
            return res.render('error');
        }
    },

    listBucket: async(req,res) => {
        try {
            if (!req.session.cart) {
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
            const orderId = req.body.newOrderId
            const request = await consult('get', `requests/show/${orderId}`)
            const newRequest = request.data
            const items = newRequest.inventory
            if (newRequest.send == true) {
                for (let i = 0; i < items.length; i++) {
                    const request = await consult('get', `products/show/${items[i].article.id}`)
                    const product = request.data
                    let totalStock = product.total
                    let center = product.quantities.find(z=> z.stockHouses.id === 1)
                    let centerStock = center.stock
                    totalStock = totalStock - items[i].quantity
                    centerStock = centerStock - items[i].quantity
                    const request1 = await consult('put', `products/update/${product.id}`,{total: totalStock})
                    const request2 = await consult('put', `quantities/update/${center.id}`,{stock: centerStock})
                    console.log(request1)
                    console.log(request2)
                }
            }
            if (newRequest.send == false) {
                for (let i = 0; i < items.length; i++) {
                    const request = await consult('get', `products/show/${items[i].article.id}`)
                    const product = request.data
                    let totalStock = product.total
                    let center = product.quantities.find(z=> z.stockHouses.id === newRequest.customer.zoneId)
                    let centerStock = center.stock
                    totalStock = totalStock - items[i].quantity
                    centerStock = centerStock - items[i].quantity
                    const request1 = await consult('put', `products/update/${product.id}`,{total: totalStock})
                    const request2 = await consult('put', `quantities/update/${center.id}`,{stock: centerStock})
                    console.log(request1.data)
                    console.log(request2.data)
                }
            }
            req.session.cart = []
            return res.redirect('/requests')
        } catch (error) {
            console.log('Error:', error);
            return res.render('error');
        }
    },
    
}