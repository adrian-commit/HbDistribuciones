const consult = require('../modules/query');
module.exports = {
    list: async(req,res) => {
        try {
            let response = await consult('get','categories/')
            let categories = response.data;
            return res.render('categories/category', {categories});  
        } catch (error) {
            return res.render('error', {error});
        }
    },

    show: async(req,res) => {
        try {
            console.log(req.params.id)
            let response = await consult('get','categories/show/'+req.params.id);
            let sub = response.data
            return res.render('categories/category', {sub})
        } catch (error) {
            return res.render('error', {error});
        }
    }
}