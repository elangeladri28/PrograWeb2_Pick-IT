const {Router} = require('express');
const {register, newUser} = require('../controllers/users.controller');

const router = Router();

router.post('/register', register);

 module.exports = router;