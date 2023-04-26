const consult = require('../modules/query');
module.exports = {

    search: async(req,res) => {
        try {
            const request1 = await consult('get', 'clients/search', {
                zoneId: req.query.zone,
                search: req.query.search
            })
            // return res.send(request1.data)
            const response2 = await consult('get', 'warehouses/')
            const clients = request1.data
            const zones = response2.data
            return res.render('clients/list', {clients, zones});  
        } catch (error) {
            return res.render('error');
        }
    },

    list: async(req,res) => {
        try {
            let response1 = await consult('get', 'clients/')
            const response2 = await consult('get', 'warehouses/')
            const clients = response1.data
            const zones = response2.data
            return res.render('clients/list', {clients, zones});  
        } catch (error) {
            return res.render('error');
        }
    },

    newClient: async(req,res) => {
        try {
            let request = await consult('get', 'warehouses/')
            let zones = request.data
            return res.render('clients/create', {zones});  
        } catch (error) {
            return res.render('error');
        }
    },

    create: async(req,res) => {
        try {
            // return res.send(req.body)
            const header = 'application/json'
            await consult('post', 'clients/create',{
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone,
                zoneId: req.body.zone
            },header)
            return res.redirect('/clients');  
        } catch (error) {
            return res.render('error');
        }
    },
}