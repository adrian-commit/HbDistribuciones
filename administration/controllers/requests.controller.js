module.exports = {

    list: async(req,res) => {
        try {
            return res.render('requests/list');  
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