module.exports = {
    list: async(req,res) => {
        try {
            return res.render('categories/category');  
        } catch (error) {
            return res.render('error');
        }
    }
}