const {list, login, newUser, showSeller} = require('../controllers/users.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/home', login)
router.get('/new', newUser)
// router.get('/show', showSeller)

module.exports = router;