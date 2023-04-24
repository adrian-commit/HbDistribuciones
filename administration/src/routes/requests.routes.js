const {listBucket, one, list} = require('../controllers/requests.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/cart', listBucket)
router.get('/show/:id', one)

module.exports = router;