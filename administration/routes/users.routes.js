const {list, newUser, showSeller} = require('../controllers/users.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
//router.get('/home', home)
router.get('/new', newUser)
router.get('/show', showSeller)
//router.get('/logout', logout)

//router.post('/login', access)

module.exports = router;