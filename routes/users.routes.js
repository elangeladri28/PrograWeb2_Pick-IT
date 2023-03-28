const {Router} = require('express');
const {register, login} = require('../controllers/users.controller');
const { check } = require('express-validator');
// const { check } = require('../m')
const router = Router();

/* TODO

- VALIDAR CORREO VALIDO --DONE
- VALIDAR CONTRASENIA VALIDA 1/2
- VALIDAR NOMBRE SIN NUMEROS O CARACTERES ESPECIALES
- VALIDAR QUE EL USUARIO YA EXISTA

*/

router.post('/register', register);
router.post('/login', login);

 module.exports = router;