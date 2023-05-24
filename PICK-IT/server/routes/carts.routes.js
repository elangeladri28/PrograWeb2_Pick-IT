const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { add, getCartItems, deleteItem } = require('../controllers/carts.controller');
const { valids } = require('../middlewares/valids');
const multer = require('multer');
const form = multer();

const router = Router();

router.post('/add', [
    form.single(),
    validarJWT,
    valids
], add);

router.get('/get',[
    validarJWT,
    valids
],getCartItems)

router.delete('/delete', [
	form.single(),
	validarJWT,
	valids
], deleteItem);

module.exports = router;
