const {User,Team}  = require('../database/models');

module.exports = {

    create: async(req,res) => {
        try {
            let user = await User.findByPk(req.body.userId)
            let team = await Team.findByPk(req.body.teamId)
            await user.addTeams(team)
            return res.status(201).send('equipo Agregado');
        } catch (error) {
            return res.send(error);
        }
    }, 
    
    deleteUT: async(req, res) => {
        try {
            let user = await User.findByPk(req.body.userId)
            let teams = await user.getTeams()
            teams = req.body.teamId != null ? teams.filter(i => i.id != req.body.teamId) : []
            await user.setTeams(teams)
            return res.status(201).send('Equipo Eliminado');  
        } catch (error) {
            return res.send(error); 
        }
    }

}