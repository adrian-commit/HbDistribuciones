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
            return res.render('models/inventary');  
        } catch (error) {
            return res.render('error');
        }
    }
}