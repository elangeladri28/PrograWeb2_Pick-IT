const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { valids } = require('../middlewares/valids');
const { postComment, getComments } = require('../controllers/comments.controller');
const multer = require('multer');
const form = multer();

const router = Router();

router.post('/post', [
	form.single(),
	validarJWT,
	valids
], postComment);

router.get('/:productId', getComments);


module.exports = router;
