const {listProducts,showOne, create, update, deleteModel, list} = require('../controllers/models.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)
router.get('/:id', listProducts)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete', deleteModel)

module.exports = router;