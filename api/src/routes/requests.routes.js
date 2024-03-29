const {list,showOne, create, update, deleteRequest} = require('../controllers/requests.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/delete', deleteRequest)

module.exports = router;