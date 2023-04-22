const consult = require('../modules/query');
const session = require('express-session');

module.exports = {

    list: async (req,res) => {
        try {
            return res.render('users/list')      
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