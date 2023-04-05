const {Team} = require('../database/models');

module.exports = {
    list: async (req,res) => {
        try {
            let teams = await Team.findAll({include:{ all:true }});
            return res.send(teams);           
        } catch (error) {
            return res.send(error);
        }
    },

    showOne: async (req,res) => {
        try {
            let team = await Team.findByPk(req.params.id,{include:{all:true}});
            return res.send(team);           
        } catch (error) {
            return res.send(error);
        }
    },

    create: async (req,res) => {
        try {
            let newTeam = await Team.create({
                name: req.body.name,
                level: req.body.level
            })
            return res.send(newTeam);
        } catch (error) {
            return res.send(error.msg);
        }
    },

    update: async (req,res) => {
        try {
            let team = await Team.findByPk(req.params.id);
            team.update({
                name: req.body.name ? req.body.name : team.name,
                level: req.body.level ? req.body.level : team.level
            });
            return res.send('Equipo Actualizado');
        } catch (error) {
            return res.send(error);
        } 
    },

    deleteTeam: async (req,res) => {
        try {
            let team = await Team.findByPk(req.body.id);
            team.destroy();
            return res.send('Equipo eliminado');
        } catch (error) {
            return res.send(error);
        }
    }
}