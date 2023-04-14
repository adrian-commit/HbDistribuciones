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
            return res.render('requests/bucket');  
        } catch (error) {
            return res.render('error');
        }
    },

    one: async (req,res)=> {
        try {
            return res.render('requests/show');
        } catch (error) {
            return res.render('error');
        }
    }
    
}