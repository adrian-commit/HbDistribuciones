const {list, newProduct, show, showStock, create, upgrade} = require('../controllers/products.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/new', newProduct)
router.get('/show/stock/:id', showStock)
router.get('/show/:id', show)

router.post('/create', create)

router.put('/upgrade/', upgrade)

module.exports = router;