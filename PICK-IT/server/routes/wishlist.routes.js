const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { valids } = require('../middlewares/valids');
const { newWishlist } = require('../controllers/wishlist.controller.js');
const multer = require('multer');
const form = multer();

const router = Router();

router.post('/new', [
		form.single(),
		validarJWT,
		valids
], newWishlist);

module.exports = router;
