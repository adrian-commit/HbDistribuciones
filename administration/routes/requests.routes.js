const {list,listBucket} = require('../controllers/requests.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/cart', listBucket)

module.exports = router;