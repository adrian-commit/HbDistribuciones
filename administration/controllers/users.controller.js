module.exports = {

    list: async (req,res) => {
        try {
            return res.render('users/list')      
        } catch (error) {
            return res.send('error')
        }
    },

    login: async (req,res) => {
        try {
            return res.render('index')      
        } catch (error) {
            return res.send('error')
        }
    },
    
    newUser: async (req,res) => {
        try {
            return res.render('users/create')      
        } catch (error) {
            return res.send('error')
        }
    }
}