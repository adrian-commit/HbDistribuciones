module.exports = {

    list: async(req,res) => {
        try {
            return res.render('products/list'); 
        } catch (error) {
            return res.render('error');
        }
    },

    newProduct: async(req,res) => {
        try {
            return res.render('products/create');  
        } catch (error) {
            return res.render('error');
        }
    },

    updatePrice: async(req,res) => {
        try {
            return res.render('products/updatePrice');  
        } catch (error) {
            return res.render('error');
        }
    },

    updateStock: async(req,res) => {
        try {
            return res.render('products/updateStock');  
        } catch (error) {
            return res.render('error');
        }
    }
}