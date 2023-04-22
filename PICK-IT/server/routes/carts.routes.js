const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { addCart } = require('../controllers/carts.controller');

const router = Router();

router.post('/', validarJWT,addCart) ;

module.exports = router;