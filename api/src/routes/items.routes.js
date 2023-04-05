const {list,showOne, create, update, deleteItem} = require('../controllers/items.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete', deleteItem)

module.exports = router;