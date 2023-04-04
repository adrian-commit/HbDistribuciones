const {list,showOne, create, update, deletePlace} = require('../controllers/warehouses.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete', deletePlace)

module.exports = router;