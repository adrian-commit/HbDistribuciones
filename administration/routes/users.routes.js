const {login} = require('../controllers/users.controller');
const {Router} = require('express');
const  router = Router();

router.get('/home', login)

module.exports = router;