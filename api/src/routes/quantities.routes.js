const {list,showOne, create, update, deleteQuantity} = require('../controllers/quantities.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete', deleteQuantity)

module.exports = router;