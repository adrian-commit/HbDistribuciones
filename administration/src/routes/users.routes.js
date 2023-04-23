const {list, newUser, showSeller,search, create} = require('../controllers/users.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/new', newUser)
router.get('/search', search)
router.get('/show/:id', showSeller)

router.post('/create', create)

module.exports = router;