const {create,deleteUT} = require('../controllers/users.teams.controller');
const {Router} = require('express');
const router = Router();

router.post('/create', create)
router.delete('/delete', deleteUT)

module.exports = router;