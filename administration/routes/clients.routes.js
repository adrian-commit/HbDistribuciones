const {list, newClient} = require('../controllers/clients.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/new', newClient)

module.exports = router;