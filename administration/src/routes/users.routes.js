const {list, newUser, showSeller,search, create} = require('../controllers/users.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/new', newUser)
router.get('/show', showSeller)
router.get('/search', search)

router.post('/create', create)

module.exports = router;