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
            return res.render('users/show');      
        } catch (error) {
            return res.send('error');
        }
    },

    create:  async (req,res) => {
        try {
            return res.send(req.body)
            return res.render('users/show');      
        } catch (error) {
            return res.send('error');
        }
    },
}