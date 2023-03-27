const {list,showOne} = require('../controllers/quantities.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)

module.exports = router;