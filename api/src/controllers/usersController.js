const {User} = require('../database/models');

module.exports = {
    all: async (req,res) => {
        try {
            let users = await User.findAll();
            return res.send(users);
        } catch (error) {
            return res.send(error.msg);
        }
    }
}