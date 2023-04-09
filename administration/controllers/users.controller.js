module.exports = {
    login: async (req,res) => {
        try {
            return res.render('index')      
        } catch (error) {
            return res.send('error')
        }
    }
}