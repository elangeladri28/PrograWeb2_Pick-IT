const {Router} = require('express');
const {register, login} = require('../controllers/users.controller');
const { check } = require('express-validator');
const { valids } = require('../middlewares/valids');
const { justLetters, pwd } = require('../helpers/validaciones');
// const { check } = require('../m')
const router = Router();

/* TODO

- VALIDAR CORREO VALIDO --DONE
- VALIDAR CONTRASENIA VALIDA 1/2
- VALIDAR NOMBRE SIN NUMEROS O CARACTERES ESPECIALES
- VALIDAR QUE EL USUARIO YA EXISTA

*/

router.post('/register', [
    check('firstname').custom(justLetters),
    check('lastname').custom(justLetters),
    check('address', 'La direccion es obligatoria'),
    check('email', 'El correo no es valido y es obligatorio').isEmail(),
    check('password').custom(pwd),
    valids
],register);
router.post('/login', login);

module.exports = router;