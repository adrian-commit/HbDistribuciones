module.exports = {
    list: async(req,res) => {
        try {
            return res.render('clients/allClients');  
        } catch (error) {
            return res.render('error');
        }
    }
}