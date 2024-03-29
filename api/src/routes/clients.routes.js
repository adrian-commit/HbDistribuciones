const {list,showOne,create,update,deleteClient,search} = require('../controllers/clients.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/search', search)
router.get('/show/:id', showOne)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete', deleteClient)

module.exports = router; 