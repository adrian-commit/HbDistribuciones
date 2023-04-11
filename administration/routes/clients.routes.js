const {list} = require('../controllers/clients.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)

module.exports = router;