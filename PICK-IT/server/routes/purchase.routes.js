const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { valids } = require('../middlewares/valids');
const { purchaseItems, history } = require('../controllers/purchase.controller.js');

const multer = require('multer');
const form  = multer();

const router = Router();

router.post('/pay', [
	validarJWT,
	valids
], purchaseItems);

router.get('/history', [
	validarJWT,
	valids
], history);

module.exports = router;
