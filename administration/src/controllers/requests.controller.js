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
            return res.send(req.body);
            const request = await consult('post', 'requests/create',{
                total: req.body.total,
                clientId: req.body.client,
                send: req.body.delivery == 'send' ? true : false
            })
            const newRequest = request.data
            const items = req.session.cart
            const userId = req.session.user.id
            for (let i = 0; i < items.length; i++) {
                const request1 = await consult('get', `products/show/${items[i].id}`)
                const product = request1.data

            }
            return res.redirect('/requests')
        } catch (error) {
            return res.render('error');
        }
    },
    
}