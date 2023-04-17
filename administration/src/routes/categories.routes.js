const {list, show} = require('../controllers/categories.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/show/:id', show)

module.exports = router;