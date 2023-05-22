const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { valids } = require('../middlewares/valids');
const { newWishlist, add, getWishlist ,deleteWishlist, remove, getWishlistItems} = require('../controllers/wishlist.controller.js');
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

router.get('/getItems', [
	validarJWT,
	valids
], getWishlistItems);

router.delete('/remove', [
	form.single(),
	validarJWT,
	valids
], remove);

module.exports = router;
