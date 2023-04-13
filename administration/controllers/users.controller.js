const consult = require('../modules/query');
const session = require('express-session');

module.exports = {

    home: async (req,res) => {
        try {
            return res.render('index')      
        } catch (error) {
            return res.send('error')
        }
    },

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

    access: async (req,res) => {
        try {
            let header = 'application/json';
            let response = await consult('post', 'users/login', {
                email: req.body.email,
                pass: req.body.password 
            },header);
            let check = response.data;
            if (!check) {
                return res.render('index')
            }
            const user = await consult('get', 'users/show/'+check)
            //req.session.user = user.data; 
            return res.redirect('/users/home')      
        } catch (error) {
            return res.send('error')
        }
    },

    logout: async (req,res) => {
        try {
            req.session.destroy();
            return res.redirect('home');      
        } catch (error) {
            return res.send('error');
        }
    },
}