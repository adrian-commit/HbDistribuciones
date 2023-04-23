const {showOne, create, update, deleteImg} = require('../controllers/modelsImage.controller');
const {Router} = require('express');
const router = Router();

const multer = require('multer');
const folder = require('../modules/storage');
const upload = multer({ storage: folder('models')});

router.get('/show/:id', showOne)
router.post('/create',upload.single('image'), create)

router.put('/update/:id',upload.single('image'), update)
router.delete('/delete', deleteImg)

module.exports = router;