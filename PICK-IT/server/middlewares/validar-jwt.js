const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const validarJWT = async(req, res, next) => {
    const token = req.header('xtkn');
    if(!token)
        return res.status(401).json({
            msg:"No hay token en la peticion"
        });

    try{
        const { uid } = jwt.verify(token, process.env.JWTSECRETKEY);
        const user = await User.findOne({_id:uid});
        if(!user)
            return res.status(401).json({
                msg:"Token lo valido - usuario no existe"
            });

        if(!user.state)
            return res.status(401).json({
                msg:"Token no valido: usuario => status: false"
            });

        req.user = user.id;
        next();
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:'Token no valido'
        });
    }
}

module.exports = {
    validarJWT
};