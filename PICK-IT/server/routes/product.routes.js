const { Router } = require('express');
const { addProduct, getAll, get, getByCategory, getByName, rate } = require('../controllers/product.controller.js');
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
router.get('/getAll', getAll);
router.get('/:prod_id',upload.single(), get);
router.get('/category/:cat_name', upload.single(), getByCategory);
router.get('/name/:product_name', upload.single(), getByName);
router.put('/rate', upload.single(), rate);

module.exports = router;
