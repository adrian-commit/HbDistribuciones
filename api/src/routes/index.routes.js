const {home} = require('../controllers/index.controller');
const {Router} = require('express');
const router = Router();

router.get('/', home)

module.exports = router;