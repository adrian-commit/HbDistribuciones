const {listBucket, one, list, create} = require('../controllers/requests.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/cart', listBucket)
router.get('/show/:id', one)

router.post('/create', create)

module.exports = router;