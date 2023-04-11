const {one} = require('../controllers/models.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', one)

module.exports = router;