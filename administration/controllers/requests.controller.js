module.exports = {

    list: async(req,res) => {
        try {
            return res.render('requests/listRequests');  
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
    }
}