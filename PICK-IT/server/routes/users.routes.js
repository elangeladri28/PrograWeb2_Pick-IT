const { Router } = require('express');
const { register, login, update } = require('../controllers/users.controller');
const { check } = require('express-validator');
const { valids } = require('../middlewares/valids');
const { userExists } = require('../helpers/db-valids');
const { justLetters, pwd } = require('../helpers/validaciones');
const { validarJWT } = require('../middlewares/validar-jwt');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads');
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        req.avatar = file.fieldname + '-' + uniqueSuffix + '.png';
        cb(null, req.avatar);
    }
});
const upload = multer({storage})
// const { check } = require('../m')
const router = Router();

/* TODO

- VALIDAR CORREO VALIDO --DONE
- VALIDAR CONTRASENIA VALIDA 1/2
- VALIDAR NOMBRE SIN NUMEROS O CARACTERES ESPECIALES
- VALIDAR QUE EL USUARIO YA EXISTA

*/

router.post('/register', [
    upload.single('avatar'), //HANDLER DE LA IMAGEN DE USUARIO
    check('firstname').custom(justLetters),
    check('lastname').custom(justLetters),
    check('address', 'La direccion es obligatoria'),
    check('email', 'El correo no es valido y es obligatorio').isEmail(),
    check('password').custom(pwd),
    valids,
],
    register);

router.post('/login', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').notEmpty()
], login);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(userExists),
    valids
], update);

module.exports = router;