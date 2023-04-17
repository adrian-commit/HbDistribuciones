const {home, logout, access} = require('../controllers/index.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', home)
router.get('/logout', logout)

router.post('/login', access)


module.exports = router;