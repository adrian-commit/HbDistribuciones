const moment = require('moment');
const consult = require('../modules/query');
const session = require('express-session');

module.exports = {

    search: async(req,res) => {
        try {
            // return res.send(req.query)
            const request1 = await consult('get', 'users/search', {
                search: req.query.search
            })
            // return res.send(request1.data)
            const users = request1.data
            return res.render('users/list', {users});  
        } catch (error) {
            return res.render('error');
        }
    },

    list: async (req,res) => {
        try {
            const request2 = await consult('get', 'users/sellers')
            const users = request2.data
            return res.render('users/list', {users})      
        } catch (error) {
            return res.send('error')
        }
    },

    
    newUser: async (req,res) => {
        try {
            return res.render('users/create')      
        } catch (error) {
            return res.send('error')
        }
    },

    showSeller: async (req,res) => {
        try {
            // return res.send(req.query)
            const request = await consult('get', `users/show/${req.params.id}`)
            const seller = request.data
            let orders = seller.orders
            
            if (req.query && req.query.send == 'send') {
                orders = orders.filter(order=>order.send==true)
            }
            if (req.query && req.query.send == 'withdraw') {
                orders = orders.filter(order=>order.send==false)
            }
            // if (req.query && req.query.zone != '') {
            //     orders = orders.filter(order=>order.customer.zoneId==req.query.zone)
            // }
            // if (req.query && req.query.startDate != '' && req.query.endDate != '' && moment(req.query.endDate).isAfter(moment(req.query.startDate))) {
            //     let start = req.query.startDate
            //     let end = req.query.endDate
            //     orders = orders.foreach(order=>{
            //         console.log(moment(order.track).isAfter(start)) 
            //         console.log(moment(order.track).isBefore(end))
            //     })
            // }
            // return res.send(orders)
            return res.render('users/show', {seller, orders});      
        } catch (error) {
            return res.send('error');
        }
    },

    create:  async (req,res) => {
        try {
            // const file = req.file
            // const model = await consult('post', 'models/create', {
            //     name: req.body.name,
            //     categoryId: req.body.sub
            // })
            // if (req.file) {
                
            // }
            // return res.send(file)
            return res.render('users/list');      
        } catch (error) {
            return res.send('error');
        }
    },
}