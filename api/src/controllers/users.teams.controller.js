const {User,Team}  = require('../database/models');

module.exports = {

    create: async(req,res) => {
        try {
            let user = await User.findByPk(req.body.userId)
            let team = await Team.findByPk(req.body.teamId)
            await user.addEquipos(team)
            return res.status(201).send({ok:true});
        } catch (error) {
            return res.send(error);
        }
    }, 
    
    deleteUT: async(req, res) => {
        try {
            let user = await User.findByPk(req.body.userId)
            let teams = await user.getEquipos()
            teams = req.body.teamId != null ? teams.filter(i => i.id != req.body.teamId) : []
            await user.setEquipos(teams)
            return res.status(204).send({ok:true});  
        } catch (error) {
            return res.send(error); 
        }
    }

}