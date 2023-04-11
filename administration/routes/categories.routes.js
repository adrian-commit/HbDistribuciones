const {list} = require('../controllers/categories.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)

module.exports = router;