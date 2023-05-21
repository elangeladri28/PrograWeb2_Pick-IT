const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { valids } = require('../middlewares/valids');
const { newWishlist, add, getWishlist ,deleteWishlist } = require('../controllers/wishlist.controller.js');
const multer = require('multer');
const form = multer();

const router = Router();

router.post('/new', [
		form.single(),
		validarJWT,
		valids
], newWishlist);

router.get('/get', [
		validarJWT, 
		valids
], getWishlist);

router.post('/add', [
	form.single(),
	validarJWT,
	valids
], add);

router.delete('/delete', [
	form.single(),
	validarJWT,
	valids
], deleteWishlist);

module.exports = router;
