const {list, newClient, create, search} = require('../controllers/clients.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/new', newClient)
router.get('/search', search)

router.post('/create', create)

module.exports = router;