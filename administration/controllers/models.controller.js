module.exports = {
    one: async(req,res) => {
        try {
            return res.render('models/inventary');  
        } catch (error) {
            return res.render('error');
        }
    }
}