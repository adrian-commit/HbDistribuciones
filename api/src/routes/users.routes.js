const {list,showOne,create,update, deleteUser, access} = require('../controllers/users.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)
router.post('/login', access)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete', deleteUser)

module.exports = router;