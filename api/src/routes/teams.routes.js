const {list,showOne} = require('../controllers/teams.controller');
const {Router} = require('express');
const router = Router();

router.get('/', list)
router.get('/show/:id', showOne)

module.exports = router;
