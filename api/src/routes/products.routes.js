const {list,showOne, create, update, deleteProduct} = require('../controllers/products.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)
router.post('/create', create)

router.put('/update/:id', update)
router.delete('/delete', deleteProduct)

module.exports = router;