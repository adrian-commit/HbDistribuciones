const {Team} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let teams = await Team.findAll();
            return res.send(teams);           
        } catch (error) {
            return res.send(error.original.sqlMessage);
        }
    },

    showOne: async (req,res) => {
        try {
            let team = await Team.findByPk(req.params.id);
            return res.send(team);           
        } catch (error) {
            return res.send(error.original.sqlMessage);
        }
    },

    create: async (req,res) => {
        try {
            let newTeam = await Team.create({
                email: req.body.email,
                password: req.body.password,
                level: req.body.level
            })
            return res.send(newTeam);
        } catch (error) {
            return res.send(error.msg);
        }
    }
}