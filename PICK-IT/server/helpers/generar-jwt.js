const jwt = require('jsonwebtoken');
require('dotenv').config();

const generarJWT = (uid = '') => {
    console.log('generar token ',uid);
    return new Promise((res, rej) => {
        const payload = { uid };
        jwt.sign(payload, process.env.JWTSECRETKEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if(err){
                console.log(err);
                rej('No se pudo generar el token');
            }else{
                res(token);
            }
        })
    })

}

module.exports = {
    generarJWT
}