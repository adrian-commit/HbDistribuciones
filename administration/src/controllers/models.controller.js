const consult = require('../modules/query');
module.exports = {

    list: async(req,res) => {
        try {
            return res.render('models/list');  
        } catch (error) {
            return res.render('error');
        }
    },

    newModel: async(req,res) => {
        try {
            return res.render('models/create');  
        } catch (error) {
            return res.render('error');
        }
    },

    catalog: async(req,res) => {
        try {
            let response1 = await consult('get','models/'+req.params.id)
            let response2 = await consult('get', 'categories/show/'+req.params.id)
            let inventory = response1.data;
            let mainCategory = response2.data;
            return res.render('models/inventary', {inventory, main: mainCategory});  
        } catch (error) {
            return res.render('error', {error});
        }
    }
}