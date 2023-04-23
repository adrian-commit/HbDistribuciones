const {catalog, list, newModel, create} = require('../controllers/models.controller');
const {Router} = require('express');
const  router = Router();
const upload = require('../modules/storage');

router.get('/', list)
router.get('/new', newModel)
router.get('/inventory/:id', catalog)

router.post('/create',[upload.single('image')], create)

module.exports = router;