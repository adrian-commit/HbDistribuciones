const {list, newProduct, updatePrice, updateStock} = require('../controllers/products.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/new', newProduct)
router.get('/update/price', updatePrice)
router.get('/update/stock', updateStock)

module.exports = router;