module.exports = {
    list: async(req,res) => {
        try {
            return res.render('clients/list');  
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