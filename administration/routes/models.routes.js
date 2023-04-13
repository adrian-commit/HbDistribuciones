const {catalog, list, newModel} = require('../controllers/models.controller');
const {Router} = require('express');
const  router = Router();

router.get('/', list)
router.get('/new', newModel)
router.get('/inventory/:id', catalog)

module.exports = router;