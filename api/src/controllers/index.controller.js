module.exports = {
    home: async (req,res) => {
        try {
            // return res.send('Conectado');
            return res.render('home');           
        } catch (error) {
            return res.send(error.msg);
        }
    }
}