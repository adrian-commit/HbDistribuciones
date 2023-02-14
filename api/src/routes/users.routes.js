const {all} = require('../controllers/usersController');
const {Router} = require('express');
const router = Router();

//-RUTAS-//

router.get('/', all);
// router.get('/show/:id', showOne);
// router.post('/create', create);
// router.put('/update', update);
// router.delete('/delete', deleteUser);

module.exports = router;