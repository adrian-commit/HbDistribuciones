const {login} = require('../controllers/users.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', login)

module.exports = router;