const { Router } = require('express');
const { addProduct } = require('../controllers/product.controller.js');
const { validarJWT } = require('../middlewares/validar-jwt');
const multer = require('multer');
const { valids } = require('../middlewares/valids');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads');
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        req.thumbnail = file.fieldname + '-' + uniqueSuffix + '.png';
        cb(null, req.thumbnail);
    }
});
const upload = multer({storage})
const router = Router();

router.post('/add',upload.single('thumbnail'), addProduct);

module.exports = router;