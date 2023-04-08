module.exports = {
    login: async (req,res) => {
        try {
            return res.render('index.pug')      
        } catch (error) {
            return res.send('error')
        }
    }
}