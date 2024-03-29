const {list,showOne,create,update,deleteTeam} = require('../controllers/teams.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete', deleteTeam)

module.exports = router;
