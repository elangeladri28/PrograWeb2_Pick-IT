const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { add, getCartItems } = require('../controllers/carts.controller');
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

module.exports = router;