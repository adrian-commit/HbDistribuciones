const {list,showOne,create,update,deleteCategory} = require('../controllers/categories.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete', deleteCategory)

module.exports = router;
