const consult = require('../modules/query');
module.exports = {
    list: async(req,res) => {
        try {
            let response = await consult('get', 'clients/')
            clients = response.data
            return res.render('clients/list', {clients});  
        } catch (error) {
            return res.render('error');
        }
    },

    newClient: async(req,res) => {
        try {
            return res.render('clients/create');  
        } catch (error) {
            return res.render('error');
        }
    }
}