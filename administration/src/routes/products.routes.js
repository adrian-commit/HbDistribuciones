const {list, newProduct, show, showStock, create, upgrade, upgradeStock, bucket} = require('../controllers/products.controller');
const cart = require('../middlewares/cart');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/new', newProduct)
router.get('/show/stock/:id', showStock)
router.get('/show/:id', show)

router.post('/create', create)
router.post('/bucket',[cart], bucket)


router.put('/upgrade', upgrade)
router.put('/upgrade/stock', upgradeStock)
module.exports = router;