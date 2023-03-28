const {Router} = require('express');
const {register, newUser} = require('../controllers/users.controller');

const router = Router();

router.get('/register', newUser);
router.post('/register', register);

 module.exports = router;